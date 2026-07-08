const {test, expect} = require('@playwright/test')
test('Launch application', async({page}) => {
    await page.goto('https://hirenova-workspace-seven.vercel.app/');
    await page.getByRole('link', { name: 'Build Your Team' }).first().click();
    await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/login');
    await page.locator('#input-email').click();
    await page.locator('#input-email').fill('mishraaarti53@gmail.com');
    await page.getByPlaceholder('Enter Your Password').click();
    await page.getByPlaceholder('Enter Your Password').fill('Aarti123@');
    await page.getByRole('button', {name:'LOGIN'}).click();
    await expect(
    //Error message checked
    page.getByText('Invalid credentials')  
  ).toBeVisible();
  //Blank email and password fields checked
  await page.getByRole('button', {name:'LOGIN'}).click();
  await expect(
    page.getByText('Please enter both email and password')
  ).toBeVisible();
});














