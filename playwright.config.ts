import { defineConfig, devices } from '@playwright/test'

/**
 * One critical journey, run against the production build at the deployed
 * base path. `npm run build` must have produced `dist/` first (CI does this;
 * locally run `npm run build && npm run e2e`).
 */
export default defineConfig({
  testDir: 'e2e',
  timeout: 90_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['github']] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173/symbolism/',
    trace: 'retain-on-failure',
    // Sandboxed/offline environments can point at a pre-installed Chromium
    // instead of downloading one; CI installs browsers normally.
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : {},
  },
  projects: [
    {
      name: 'mobile-chromium',
      use: {
        ...devices['Pixel 5'],
        // The acceptance criteria call for a 375px-wide phone.
        viewport: { width: 375, height: 720 },
      },
    },
  ],
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173/symbolism/',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
