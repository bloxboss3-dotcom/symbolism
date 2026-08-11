/**
 * Notification support, kept deliberately honest.
 *
 * Permission is requested only from an explicit user action (enabling a
 * reminder) — never on load. And because the MVP has no push server, the app
 * never pretends a closed browser can ring: scheduling runs in-page, and the
 * Settings screen says so in plain language.
 */
export type NotifyCapability = 'unsupported' | 'default' | 'granted' | 'denied'

export function notifyCapability(): NotifyCapability {
  if (typeof Notification === 'undefined') return 'unsupported'
  return Notification.permission
}

/** Call only from a user gesture with clear intent (e.g. "Enable reminders"). */
export async function requestNotifyPermission(): Promise<NotifyCapability> {
  if (typeof Notification === 'undefined') return 'unsupported'
  try {
    return await Notification.requestPermission()
  } catch {
    return 'denied'
  }
}

export function showReminder(title: string, body: string, silent: boolean): void {
  if (notifyCapability() !== 'granted') return
  const options: NotificationOptions = { body, silent, tag: 'sbh-reminder' }
  // Prefer the service-worker path: it survives better on installed PWAs.
  if ('serviceWorker' in navigator) {
    void navigator.serviceWorker.ready
      .then((reg) => reg.showNotification(title, options))
      .catch(() => {
        try {
          new Notification(title, options)
        } catch {
          // Some platforms allow only the SW path; the in-app card remains.
        }
      })
    return
  }
  try {
    new Notification(title, options)
  } catch {
    // The in-app reminder card is the fallback surface.
  }
}
