const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('User can sign up successfully', async ({ page }) => {

  // Test Data
  const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'Aarti@123',
    otp: '123456'
  };

  // Navigate to Signup Page
  await page.goto('https://hirenova-workspace-seven.vercel.app/');
  await page.getByRole('link', { name: 'Build Your Team' }).first().click();
  await page.getByRole('link', { name: 'Sign Up' }).click();

  // Fill Signup Form
  await page.locator('#input-first-name').fill(user.firstName);
  await page.locator('#input-last-name').fill(user.lastName);
  await page.locator('#input-email').fill(user.email);
  await page.getByPlaceholder('Enter Your Password').fill(user.password);
  await page.getByPlaceholder('Enter Your Confirm Password').fill(user.password);

  // Submit Signup Form
  await page.getByRole('button', { name: 'SIGN UP NOW' }).click();

  // Enter OTP
  await page.locator('#input-enter-otp').fill(user.otp);

  // Complete Registration
  await page.getByRole('button', { name: 'SIGN UP NOW' }).click();
});