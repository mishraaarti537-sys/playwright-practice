const { test, expect } = require('@playwright/test');

test('Static dropdown', async ({ page }) => {
  await page.goto('https://www.salesforce.com/in/platform/demos/shield-overview/');
  await page.locator('[name="jobRole"]').selectOption({ label: 'Developer' });
  await page.waitForTimeout(5000);
});