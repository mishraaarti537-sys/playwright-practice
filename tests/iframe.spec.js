const {test, expect} = require('@playwright/test')
test('iframe', async({page}) => {
    await page.goto('https://www.w3schools.com/Jsref/tryit.asp?filename=tryjsref_html_click');

    const frame = page.frameLocator('#iframeResult');

    await frame.locator('#myCheck').hover();
});

