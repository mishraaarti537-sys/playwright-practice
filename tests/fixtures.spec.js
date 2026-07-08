const { test, expect } = require('@playwright/test');

test('Fixtures and Context', async ({ browser }) => {
    const context = await browser.newContext({baseURL: "https://playwright.dev/", ColorScheme: "dark"});
    const page = await context.newPage();
    await page.goto("/");
});


    