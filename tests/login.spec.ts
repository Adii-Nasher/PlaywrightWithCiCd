import { test, expect } from '@playwright/test';

test.describe('Login Suite', () => {
  test('Successful login with a standard user', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });

test('Login with locked-out user', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  const errorMessage = await page.locator('[data-test="error"]').textContent();
  expect(errorMessage).toBe('Epic sadface: Sorry, this user has been locked out.');
});

test('Successful login with a problem user', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'problem_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('/inventory.html');
  const brokenImages = await page.locator('img').evaluateAll(images => images.filter(img => !img.complete || img.naturalHeight === 0));
  expect(brokenImages.length).toBeGreaterThan(0);
});

test('Successful login with a performance glitch user', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'performance_glitch_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  const navigationTiming = await page.evaluate(() => performance.timing.loadEventEnd - performance.timing.navigationStart);
  await expect(page).toHaveURL('/inventory.html');
});

test('Login without a username', async ({ page }) => {
  await page.goto('/');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  const errorMessage = await page.locator('[data-test="error"]').textContent();
  expect(errorMessage).toBe('Epic sadface: Username is required');
});

test('Login without a password', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.click('#login-button');
  const errorMessage = await page.locator('[data-test="error"]').textContent();
  expect(errorMessage).toBe('Epic sadface: Password is required');
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