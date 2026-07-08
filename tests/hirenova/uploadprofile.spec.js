const {test, expect} = require('@playwright/test')
test('', async({page}) => {
    await page.goto('https://hirenova-workspace-seven.vercel.app/');
    await page.getByRole('link', { name: 'Build Your Team' }).first().click();
    await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/login');
    await page.locator('#input-email').fill('mishraaarti537@gmail.com');
    await page.getByPlaceholder('Enter Your Password').fill('Aarti123@');
    await page.getByRole('button', {name:'LOGIN'}).click();
    const profileBtn = page.getByRole('button', {
    name: 'User verification badge icon'
    });

    await expect(profileBtn).toBeVisible();
    await profileBtn.click();
    const fileChooserPromise = page.waitForEvent('filechooser');

    await page.getByRole('menuitem', {
      name: 'Upload Profile Picture'
     }).click();
    await page.pause();

    const fileChooser = await fileChooserPromise;

    await fileChooser.setFiles(
      'C:\\Users\\LapMall\\Pictures\\download.jfif'
    );
});
    
