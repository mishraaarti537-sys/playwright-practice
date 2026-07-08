const {test, expect} = require('@playwright/test')
test('Upload files', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').click();
    await page.setInputFiles()

