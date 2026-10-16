import { defineConfig, devices } from '@playwright/test'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  testDir: './visual',
  timeout: 60_000,
  expect: { timeout: 12_000 },
  retries: 1,
  workers: 1,
  reporter: [['list'], ['html', { outputFolder: 'visual-report', open: 'never' }]],
  outputDir: 'visual-test-results',
  use: {
    ...devices['Desktop Chrome'],
    reducedMotion: 'reduce',
    colorScheme: 'dark',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: [
    {
      command: 'npm run preview -- --host 127.0.0.1 --port 4173',
      cwd: fileURLToPath(new URL('../../', import.meta.url)),
      url: 'http://127.0.0.1:4173',
      timeout: 120_000,
      reuseExistingServer: false,
    },
    {
      command: 'node .output/server/index.mjs',
      cwd: fileURLToPath(new URL('./', import.meta.url)),
      env: { PORT: '43126', HOST: '127.0.0.1', NODE_ENV: 'production' },
      url: 'http://127.0.0.1:43126',
      timeout: 120_000,
      reuseExistingServer: false,
    },
  ],
})
