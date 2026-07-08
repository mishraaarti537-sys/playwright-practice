const { test, expect } = require('@playwright/test');

test('Radio & dropdown', async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
    await page.locator('#rememberUn').check();
    await expect(page.locator('#rememberUn')).toBeChecked();


});