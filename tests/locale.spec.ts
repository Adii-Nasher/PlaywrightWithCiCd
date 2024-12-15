import { test, expect } from '@playwright/test';

test.describe('Locale Adaptation Suite', () => {
  test('Switch to Spanish Locale and Verify Cart Items Translation', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('data-test=add-to-cart-sauce-labs-backpack');

    await page.evaluate(() => {
      document.documentElement.lang = 'es';
    });

    await page.click('.shopping_cart_link');
    
    const productName = await page.locator('.inventory_item_name').textContent();
    expect(productName).toBe('Sauce Labs Backpack');
    
    const checkoutButton = await page.locator('data-test=checkout').textContent();
    expect(checkoutButton).toBe('Checkout');
  });
});
