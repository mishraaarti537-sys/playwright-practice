const { test, expect } = require('@playwright/test');

test('vendor signup flow', async ({ page }) => {
  let devOtp = null;

  // Intercept register API response to capture devOtp (only available when DEV_RETURN_OTP=true on server)
  page.on('response', async response => {
    if (
      response.url().includes('/auth/vendor/register') &&
      response.request().method() === 'POST'
    ) {
      try {
        const body = await response.json();
        if (body.devOtp) {
          devOtp = body.devOtp;
          console.log('Captured devOtp from API:', devOtp);
        }
      } catch (_) {}
    }
  });

  await page.goto('https://hirenova-workspace-seven.vercel.app/vendor/login');
  await page.getByRole('link', { name: 'Sign up' }).click();

  await page.getByPlaceholder('Enter Your First Name').fill('Aarti');
  await page.getByPlaceholder('Enter Your Last Name').fill('Mishra');

  const email = `tvfhgfzhgv6@yopmail.com`;
  const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;

  console.log('Signing up with email:', email);

  await page.getByPlaceholder('Enter Your Phone Number').fill(phone);
  await page.getByPlaceholder('Enter Your Email').fill(email);
  await page.getByPlaceholder('Enter Your Password').fill('Aarti.1234');
  await page.getByPlaceholder('Enter Your Confirm Password').fill('Aarti.1234');
  await page.getByRole('button', { name: 'SIGN UP NOW' }).click();

  // Wait for API response to be captured
  await page.waitForTimeout(3000);

  const otpToUse = devOtp ?? '123456';
  console.log('Using OTP:', otpToUse, devOtp ? '(from API)' : '(fallback - may fail if server does not return devOtp)');

  await page.getByPlaceholder('Enter your Otp').fill(otpToUse);
  await page.getByRole('button', { name: 'SIGN UP NOW' }).click();

  await page.waitForTimeout(3000);
  console.log('Final URL:', page.url());

  // After OTP verification, user lands on verify-profile to upload documents
  await expect(page).toHaveURL(/vendor\/verify-profile/, { timeout: 10000 });
});
 