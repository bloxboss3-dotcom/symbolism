/**
 * Service worker registration and the update handshake.
 *
 * A waiting worker means a newer build is installed and ready. Rather than
 * swapping it in mid-lesson, the app surfaces a banner and lets the learner
 * choose the moment — updating reloads the page, and losing a half-written
 * answer to a silent refresh would be the worst possible bug in an app like
 * this one.
 */

export type UpdateHandler = (applyUpdate: () => void) => void

const SW_URL = `${import.meta.env.BASE_URL}sw.js`

export function registerServiceWorker(onUpdateReady: UpdateHandler): void {
  if (!('serviceWorker' in navigator)) return
  if (import.meta.env.DEV) return

  // Registration is deferred until the page has settled, so it never competes
  // with the first render for bandwidth. But this is called from a React
  // effect, which runs after paint — `load` has usually fired already, and
  // listening for an event that is in the past would skip registration
  // entirely, taking every offline guarantee with it.
  if (document.readyState === 'complete') {
    begin()
  } else {
    window.addEventListener('load', begin, { once: true })
  }

  function begin() {
    navigator.serviceWorker
      .register(SW_URL, { scope: import.meta.env.BASE_URL })
      .then((registration) => {
        const announce = (worker: ServiceWorker) => {
          onUpdateReady(() => {
            worker.postMessage({ type: 'SKIP_WAITING' })
          })
        }

        if (registration.waiting && navigator.serviceWorker.controller) {
          announce(registration.waiting)
        }

        registration.addEventListener('updatefound', () => {
          const installing = registration.installing
          if (!installing) return
          installing.addEventListener('statechange', () => {
            // A worker reaching `installed` while another controls the page is
            // by definition an update rather than a first install.
            if (installing.state === 'installed' && navigator.serviceWorker.controller) {
              announce(installing)
            }
          })
        })

        // Check for a new build when the app is brought back to the foreground.
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') void registration.update()
        })
      })
      .catch(() => {
        // Offline support is a bonus; failing to register must never be fatal.
      })

    // The worker calls `clients.claim()`, so a first install also fires
    // `controllerchange` — with no update having happened. Reloading on that
    // would refresh the page out from under a first-time visitor, possibly
    // mid-answer. Only a controller replacing an earlier one is an update.
    const wasControlled = Boolean(navigator.serviceWorker.controller)
    let reloading = false
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!wasControlled || reloading) return
      reloading = true
      window.location.reload()
    })
  }
}
