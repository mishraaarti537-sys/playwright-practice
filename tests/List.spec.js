const { test, expect } = require('@playwright/test');

test('List demo', async ({ page }) => {
    await page.goto('https://training.rcvacademy.com/');

   
    const items = page.getByRole('listitem');

    await expect(items.filter({ hasText: 'Per month price' })).toBeVisible();
});