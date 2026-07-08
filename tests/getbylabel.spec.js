const { test, expect } = require('@playwright/test');

test('Launch application', async ({ page }) => {
  await page.goto('https://in.pinterest.com/login/');
  
  await page.getByval("Email").fill('aartim992@gmail.com');
  await page.getByPlaceholder("Password").fill('aarti123@');
  
  await page.getByRole('button', { name: 'Log in' }).click();
});