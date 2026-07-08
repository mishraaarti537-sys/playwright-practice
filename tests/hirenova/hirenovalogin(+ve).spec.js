const {test, expect} = require('@playwright/test')
test('Launch application', async({page}) => {
    await page.goto('https://hirenova-workspace-seven.vercel.app/');
    await page.getByRole('link', { name: 'Build Your Team' }).first().click();
    await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/login');
    await page.locator('#input-email').click();
    await page.locator('#input-email').fill('mishraaarti537@gmail.com');
    await page.getByPlaceholder('Enter Your Password').click();
    await page.getByPlaceholder('Enter Your Password').fill('Aarti123@');
    await page.getByRole('button', {name:'LOGIN'}).click();
    await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/jobs-all/cmpmhhh8p00thwcvplgxujibn');

});