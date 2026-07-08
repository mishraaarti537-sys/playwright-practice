const { test, expect } = require('@playwright/test');
const path = require('path');

test('upload resume file', async ({ page }) => {
  // Replace the URL with the real page that has the file input
  await page.goto('https://hirenova-workspace-seven.vercel.app/');
  await page.getByRole('link', { name: 'Build Your Team' }).first().click();
  await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/login');
  await page.locator('#input-email').fill('mishraaarti537@gmail.com');
  await page.getByPlaceholder('Enter Your Password').fill('Aarti123@');
  await page.getByRole('button', {name:'LOGIN'}).click();
  

  const filePath = path.resolve(__dirname, '../../test-data/sample_resume.pdf');

  // Upload to the first file input on the page
  await page.setInputFiles('input[type="file"]', filePath);

  // Simple verification: check input now references the uploaded file name
  const uploadedName = await page.$eval('input[type="file"]', input => input.files[0].name);
  expect(uploadedName).toBe('sample_resume.pdf');
});
