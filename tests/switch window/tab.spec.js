const { test, expect } = require('@playwright/test');

test('New Tab Handling', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/windows');

    // Verify heading
    await expect(page.locator('h3'))
        .toHaveText('Opening a new window');

    // Wait for popup
    const popupPromise = page.waitForEvent('popup');

    // Click link
    await page.locator('a[href="/windows/new"]').click();

    // Store new tab
    const newPage = await popupPromise;

    // Wait for loading
    await newPage.waitForLoadState();

    // Validation in new tab
    await expect(newPage.locator('h3'))
        .toHaveText('New Window');

    // Print title
    console.log(await newPage.title());

});