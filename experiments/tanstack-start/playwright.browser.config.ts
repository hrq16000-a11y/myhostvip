import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './browser',
  timeout: 30_000,
  expect: { timeout: 15_000 },
  retries: 1,
  workers: 1,
  reporter: [['list'], ['html', { outputFolder: 'browser-report', open: 'never' }]],
  outputDir: 'browser-test-results',
  use: { baseURL: 'http://127.0.0.1:43126', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'node .output/server/index.mjs',
    url: 'http://127.0.0.1:43126',
    env: { PORT: '43126', HOST: '127.0.0.1', NODE_ENV: 'production' },
    timeout: 120_000,
    reuseExistingServer: false,
  },
})
