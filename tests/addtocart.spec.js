const { test, expect } = require('@playwright/test');

test('Flipkart Add To Cart Flow', async ({ page }) => {


    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('.product_sort_container').selectOption('lohi');;

});

  