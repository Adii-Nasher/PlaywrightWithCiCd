import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  retries: 1,
  reporter: [
    ['html', { outputFolder: 'reports/playwright-report' }],
  ],
  outputDir: 'reports/test-results',
});
