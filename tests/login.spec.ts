import { test, expect } from '@playwright/test';

test.describe('Login Suite', () => {
  test('Successful Login', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('/inventory.html');
  });

  test('Login with Invalid Credentials', {
    tag: '@smoke',
  }, async ({ page }) => { 
    await page.goto('/');
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
  });
});