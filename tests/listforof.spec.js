const {test, expect} = require('@playwright/test')
test('List demo', async({page}) => {
    await page.goto('https://training.rcvacademy.com/')
    await expect(page.getByRole('listitem')).toHaveCount(29);
});