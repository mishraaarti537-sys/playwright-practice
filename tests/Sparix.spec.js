const {test, expect} = require('@playwright/test');
test('Launch application',async({page}) => {
    await page.goto('https://www.sparixglobal.com/');
    await page.locator('#list-item-id-16').getByRole('link',{name:'Read More'}).click();
    await page.getByRole('link',{name:'Contact Us'}).nth(0).click();
    await page.getByText('Full Name').fill('Aarti Mishra');
    await page.getByText('Email address').fill('aarti.mishra@example.com');
    const countryDropdown = page.locator('button.phone-country-code-trigger');

    await expect(countryDropdown).toBeVisible();
    await countryDropdown.click();
    await page.getByRole('button', {name : 'Submit'}).click();

/*await page.waitForTimeout(500);

await page.locator('button[role="option"]')
    .filter({ hasText: 'India' })
    .click();
    await page.getByText('Phone Number').fill('1234567890');
    await page.getByText('Message').fill('Doing Testing');
    await page.getByRole('button', { name: 'Submit' }).click({ force: true });
    
   await page.getByRole('button', {name : 'Services'}).click();
   await page.getByRole('link', {name : 'Dedicated Development Team'}).first().click();
   await page.getByRole('button', {name: /How do I ensure the quality of the dedicated development team services/i
}).click();*/
});