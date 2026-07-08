const {test, expect} = require('@playwright/test')
test('Launch application', async({page}) => {
    await page.goto('https://login.salesforce.com');
    await page.locator("xpath=//*[@id='username']").fill("RCV");
    await page.locator("css=#password").fill("RCV");
})