const { test, expect } = require('@playwright/test');

test('Mouse Hover', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    await page.getByText('iPhone 15 (Black, 128 GB)').click();
    
});