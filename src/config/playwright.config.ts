import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    locale: 'en-GB',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  retries: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
  ],
});