const {test, expect} = require('@playwright/test')
test('Launch application', async({page}) => {
    await page.goto('https://hirenova-workspace-1dua.vercel.app/');
    await page.locator('email').fill('admin2@example.com');
    await page.locator('password').fill('password123');
    await page.getByRole('button',{name:'Sign In'}).click();
});