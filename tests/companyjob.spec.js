const { test, expect } = require('@playwright/test');

test('Create a job', async ({ page }) => {


    await page.goto('https://hirenova-workspace-seven.vercel.app/company/login');
    await page.locator('#input-email').fill('company10@gmail.com');
    await page.getByPlaceholder('Enter Your Password').fill('Aarti123@');
    await page.getByRole('button',{name:'LOGIN'}).click();
    await page.locator('a:has-text("Post A New Job")').click();
    await page.getByRole('button', { name: 'Create Job' }).click();
    await page.getByPlaceholder('e.g. Senior UX/UI Designer').fill('Automation Test Engineer');
    await page.getByText('Select Employment Type').click();
    await page.getByText('Full-time').click();
    await page.getByPlaceholder('e.g. India').fill('India');
    await page.getByPlaceholder('e.g. Delhi').fill('Delhi');
    await page.getByPlaceholder('e.g. New Delhi').fill('New Delhi');
    await page.getByLabel('Number of Openings').fill('3');
    await page.getByRole('button',{name:'Next Step'}).click();
});