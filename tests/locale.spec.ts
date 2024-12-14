import { test, expect } from '@playwright/test';

test.describe('Locale Adaptation Suite', () => {
  test('Switch to Spanish Locale and Verify Translation', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      document.documentElement.lang = 'es';
    });
    const headerText = await page.locator('.header_secondary_container').textContent();
    expect(headerText).toContain('PRODUCTOS');
  });
});