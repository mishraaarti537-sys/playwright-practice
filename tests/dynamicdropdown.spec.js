const { test, expect } = require('@playwright/test');

test('Dynamic dropdown', async ({ page }) => {
  await page.goto('https://www.yatra.com/');

  // Click the departure field (custom div, not input)
  const depart = page.getByText('Going To');
  await depart.click();

  // Now actual textbox appears
  const input = page.locator('input[type="text"]').last();
  await input.fill('New');

  // Wait for dropdown and select
  const option = page.locator('li:has-text("New York")');
  await expect(option.first()).toBeVisible();
  await option.first().click();
});