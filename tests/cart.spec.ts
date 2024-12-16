import { test, expect } from '@playwright/test';

test.describe('Cart Suite', () => {
  test('Add Product to Cart', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('data-test=add-to-cart-sauce-labs-backpack');
    const cartCount = await page.locator('.shopping_cart_badge');
    await expect(cartCount).toHaveText('1');
  });

  test('Remove Product from Cart', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('data-test=add-to-cart-sauce-labs-backpack');
    await page.click('data-test=remove-sauce-labs-backpack');
    const cartBadge = await page.locator('.shopping_cart_badge');
    await expect(cartBadge).not.toBeVisible();
  });
});test.describe('Cart Suite', () => {
  test('Add a product to the cart', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('data-test=add-to-cart-sauce-labs-backpack');
    const cartCount = await page.locator('.shopping_cart_badge').textContent();
    expect(cartCount).toBe('1');
  });

  test('Remove a product from the cart', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('data-test=add-to-cart-sauce-labs-backpack');
    await page.click('data-test=remove-sauce-labs-backpack');
    const cartBadge = await page.locator('.shopping_cart_badge');
    expect(cartBadge).not.toBeVisible();
  });
});