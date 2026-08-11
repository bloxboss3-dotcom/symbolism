import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vitest/config'

/**
 * Deployed as a GitHub *project* site, so every asset, the manifest, the
 * service worker and its scope all live under `/<repo>/`. Overridable so the
 * same source can be served from a user site or a custom domain.
 */
const BASE = process.env.VITE_BASE ?? '/symbolism/'

const swTemplatePath = fileURLToPath(new URL('./src/pwa/sw-template.js', import.meta.url))

/**
 * Emits a service worker that precaches the built app shell. Written by hand
 * rather than pulled from a toolkit so the caching rules stay small enough to
 * read in one sitting, and so the precache list is derived from the real
 * bundle instead of a glob that can silently drift.
 */
function serviceWorkerPlugin(): Plugin {
  return {
    name: 'sbh-service-worker',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const emitted = Object.keys(bundle)
        .filter((name) => !name.endsWith('.map'))
        .map((name) => BASE + name)

      // Static files copied straight from `public/` are not part of the bundle
      // graph, so they are listed explicitly.
      const staticAssets = [
        BASE,
        `${BASE}index.html`,
        `${BASE}manifest.webmanifest`,
        `${BASE}offline.html`,
        `${BASE}favicon.svg`,
        `${BASE}apple-touch-icon.png`,
        `${BASE}icons/icon-192.png`,
        `${BASE}icons/icon-512.png`,
        `${BASE}icons/maskable-512.png`,
      ]

      const precache = Array.from(new Set([...staticAssets, ...emitted])).sort()
      const version = createHash('sha256').update(precache.join('\n')).digest('hex').slice(0, 12)

      const source = readFileSync(swTemplatePath, 'utf8')
        .replaceAll('__PRECACHE_MANIFEST__', JSON.stringify(precache, null, 2))
        .replace(/__CACHE_VERSION__/g, version)
        .replace(/__BASE_PATH__/g, BASE)

      this.emitFile({ type: 'asset', fileName: 'sw.js', source })
    },
  }
}

export default defineConfig({
  base: BASE,
  plugins: [react(), serviceWorkerPlugin()],
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
          if (id.includes('/src/data/')) return 'content'
          return undefined
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    css: false,
  },
})
