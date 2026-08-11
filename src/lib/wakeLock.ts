/**
 * Keeps the screen awake during a guided session where supported, and lets
 * the platform reclaim it the moment the session ends. Failure is always
 * silent: a session without a wake lock is merely a session where the screen
 * may dim.
 */
let sentinel: WakeLockSentinel | null = null
let wanted = false

export function wakeLockSupported(): boolean {
  return typeof navigator !== 'undefined' && 'wakeLock' in navigator
}

async function acquire(): Promise<void> {
  if (!wakeLockSupported() || document.visibilityState !== 'visible') return
  try {
    sentinel = await navigator.wakeLock.request('screen')
    sentinel.addEventListener('release', () => {
      sentinel = null
      // Re-acquire when the page becomes visible again, if still wanted.
    })
  } catch {
    sentinel = null
  }
}

function onVisibility(): void {
  if (wanted && document.visibilityState === 'visible' && !sentinel) void acquire()
}

export function requestWakeLock(): void {
  if (wanted) return
  wanted = true
  document.addEventListener('visibilitychange', onVisibility)
  void acquire()
}

export function releaseWakeLock(): void {
  wanted = false
  document.removeEventListener('visibilitychange', onVisibility)
  const current = sentinel
  sentinel = null
  if (current) void current.release().catch(() => undefined)
}
