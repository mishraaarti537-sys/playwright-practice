const {test, expect} = require('@playwright/test')
test('Launch application', async({page}) => {
    await page.goto('https://www.naukri.com/');
    await page.getByRole('link', { name: 'login' }).click();
});