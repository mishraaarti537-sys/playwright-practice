const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('User Registration', async ({ page }) => {

  const name = faker.person.fullName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  await page.goto('https://hirenova-workspace-seven.vercel.app/');
  await page.getByRole('link', { name: 'Build Your Team' }).first().click();
  await page.locator('#input-email').fill(email);
  await page.getByPlaceholder('Enter Your Password').fill(password);
  await page.getByRole('button', {name:'LOGIN'}).click();
});
//SIGNUP