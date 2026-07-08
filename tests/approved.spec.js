const { test, expect } = require('@playwright/test');
test('approve vendor Flow', async ({ page }) => {
    await page.goto('https://hirenova-workspace-seven.vercel.app/vendor/login');
    await page.getByRole('link',{name:'Sign up'}).click();
    const firstName = `Aarti${Date.now()}`;
    const lastname = `Mishra${Date.now()}`;
    await page.getByPlaceholder('Enter Your First Name').fill(firstName);
    await page.getByPlaceholder('Enter Your Last Name').fill(lastname);
    const email = `vendor${Date.now()}@gmail.com`;

    const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
    await page.getByPlaceholder('Enter Your Phone Number').fill(phone);
    await page.getByPlaceholder('Enter Your Email').fill(email);
    await page.getByPlaceholder('Enter Your Password').fill('Aarti.1234');
    await page.getByPlaceholder('Enter Your Confirm Password').fill('Aarti.1234');
    await page.getByRole('button',{name:'SIGN UP NOW'}).click();
    await page.getByPlaceholder('Enter your Otp').fill('123456');
    await page.getByRole('button',{name:'SIGN UP NOW'}).click();

    /*await page.getByLabel('Upload logo').setInputFiles('c:\Users\LapMall\Pictures\download.jfif');
    await page.locator('#input-company-name').fill('SPARIX GLOBAL');
    
    await page.locator('#input-company-address').fill('XYZ');
    */


    await page.locator('#vendor-doc-addressProof').setInputFiles('C:/Users/LapMall/Downloads/full_stack _nikhil (1).pdf'
);
    await page.getByRole('button',{name:'SIGN UP NOW'}).click();
    await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/vendor/approval');



  await page.goto('https://hirenova-workspace-1dua.vercel.app/');

  await page.getByPlaceholder('admin@example.com').fill('admin2@example.com');
  await page.getByPlaceholder('Enter your password').fill('password123');

  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Vendor Management' }).click();
  await page.getByRole('link', { name: 'Pending Approvals' }).click();
  await page.getByPlaceholder('Search Vendors...').nth(1).fill(firstName);
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Approve' }).click();
  await page.getByRole('button',{name:'Yes, Approved'}).click();
  


});




/*
const { test, expect } = require('@playwright/test');

test('Vendor Signup Debug', async ({ page }) => {

    // Log all POST requests
    page.on('request', request => {
        if (request.method() === 'POST') {
            console.log('\n================ REQUEST ================');
            console.log('URL:', request.url());
            console.log('METHOD:', request.method());
            console.log('BODY:', request.postData());
        }
    });

    // Log all POST responses
    page.on('response', async response => {
        if (response.request().method() === 'POST') {
            console.log('\n================ RESPONSE ================');
            console.log('URL:', response.url());
            console.log('STATUS:', response.status());

            try {
                console.log('RESPONSE BODY:', await response.text());
            } catch (e) {
                console.log('Unable to read response body');
            }
        }
});
});

    /*await page.goto('https://hirenova-workspace-seven.vercel.app/vendor/login');

    await page.getByRole('link', { name: 'Sign up' }).click();

    // Wait for signup form
    await page.waitForLoadState('networkidle');

    // Fill details
    await page.getByPlaceholder('Enter Your First Name').fill('Aarti');
    await page.getByPlaceholder('Enter Your Last Name').fill('Mishra');
    await page.getByPlaceholder('Enter Your Phone Number').fill('9999999998');
    await page.getByPlaceholder('Enter Your Email').fill('vendor21@gmail.com');
    await page.getByPlaceholder('Enter Your Password').fill('Aarti123@');
    await page.getByPlaceholder('Enter Your Confirm Password').fill('Aarti123@');

    // Screenshot before clicking
    await page.screenshot({
        path: 'before-signup.png',
        fullPage: true
    });

    // Click signup
    await page.getByRole('button', { name: 'SIGN UP NOW' }).click();

    // Wait a few seconds
    await page.waitForTimeout(5000);

    // Screenshot after clicking
    await page.screenshot({
        path: 'after-signup.png',
        fullPage: true
    });

    console.log('Current URL:', page.url());

    console.log('Page Text:');
    console.log(await page.locator('body').textContent());
});*/
