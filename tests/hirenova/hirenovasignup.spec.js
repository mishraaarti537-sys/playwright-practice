const {test, expect} = require('@playwright/test')
test('Launch application', async({page}) => {
    await page.goto('https://hirenova-workspace-seven.vercel.app/');
    await page.getByRole('link', { name: 'Build Your Team' }).first().click();
    await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/login');
    await page.getByRole('link',{name:'Sign Up'}).click();
    await page.locator('#input-first-name').fill('Aarti');
    await page.locator('#input-last-name').click();
    await page.locator('#input-last-name').fill('Mishra');
    await page.locator('#input-email').click();
    await page.locator('#input-email').fill('aarti9@gmail.com');
    await page.getByPlaceholder('Enter Your Password').click();
    await page.getByPlaceholder('Enter Your Password').fill('Aarti123@');
    await page.getByPlaceholder('Enter Your Confirm Password').fill('Aarti123@');
    await page.getByRole('button',{name:'SIGN UP NOW'}).click();
    await page.locator('#input-enter-otp').fill('123456');
    await page.getByRole('button',{name:'SIGN UP NOW'}).click();



});