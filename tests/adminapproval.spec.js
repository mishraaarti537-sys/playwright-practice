const { test, expect } = require('@playwright/test');
test('Admin approves vendor', async ({ page }) => {
  await page.goto('https://hirenova-workspace-1dua.vercel.app/login');
  await page.getByPlaceholder('admin@example.com').fill('admin2@example.com');
  await page.getByPlaceholder('Enter your password').fill('password123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Vendor Management' }).click();
  await page.getByRole('link', { name: 'Pending Approvals' }).click();
  await page.getByRole('button', { name: 'Approve' }).first().click();

  
});