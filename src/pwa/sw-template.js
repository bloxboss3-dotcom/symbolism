/**
 * Still Before Him service worker.
 *
 * Build-time placeholders in this file are substituted by the plugin in
 * `vite.config.ts`: the cache version is a hash of the precache list, so a new
 * worker is only published when the built output actually changed.
 *
 * (Placeholder tokens are deliberately not spelled out in this comment — the
 * substitution is a plain string replace and would rewrite them here too.)
 */

const CACHE = 'sbh-__CACHE_VERSION__'
const BASE = '__BASE_PATH__'
const SHELL = BASE + 'index.html'
const OFFLINE = BASE + 'offline.html'
const PRECACHE = __PRECACHE_MANIFEST__

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE)
      // Added one at a time: a single 404 in `addAll` would abort the whole
      // install and leave the app with no offline shell at all.
      await Promise.all(
        PRECACHE.map(async (url) => {
          try {
            await cache.add(new Request(url, { cache: 'reload' }))
          } catch {
            console.warn('[sbh-sw] could not precache', url)
          }
        }),
      )
    })(),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable()
      }
      await self.clients.claim()
    })(),
  )
})

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING' || event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  if (event.data?.type === 'GET_VERSION') {
    event.source?.postMessage({ type: 'VERSION', version: '__CACHE_VERSION__' })
  }
})

/** Hashed build output never changes under the same name, so it is safe forever. */
function isImmutableAsset(url) {
  return url.pathname.startsWith(BASE + 'assets/')
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  // Navigations: the router lives in the hash, so every navigation resolves to
  // the same shell. Try the network so a fresh deploy is picked up promptly,
  // then fall back to the cached shell, then to a static offline notice.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preloaded = await event.preloadResponse
          if (preloaded) return preloaded
          const fresh = await fetch(request)
          const cache = await caches.open(CACHE)
          cache.put(SHELL, fresh.clone())
          return fresh
        } catch {
          const cache = await caches.open(CACHE)
          return (
            (await cache.match(SHELL)) ??
            (await cache.match(OFFLINE)) ??
            new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } })
          )
        }
      })(),
    )
    return
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE)
      const cached = await cache.match(request)
      if (cached && isImmutableAsset(url)) return cached

      try {
        const fresh = await fetch(request)
        if (fresh.ok && fresh.type === 'basic') cache.put(request, fresh.clone())
        return fresh
      } catch {
        if (cached) return cached
        throw new Error('Request failed while offline: ' + url.pathname)
      }
    })(),
  )
})
