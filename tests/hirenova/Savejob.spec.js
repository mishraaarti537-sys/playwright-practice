const {test, expect} = require('@playwright/test')
test('Savejob', async({page}) => {
    await page.goto('https://hirenova-workspace-seven.vercel.app/');
    await page.getByRole('link', { name: 'Build Your Team' }).first().click();
    await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/login');
    await page.locator('#input-email').click();
    await page.locator('#input-email').fill('mishraaarti537@gmail.com');
    await page.getByPlaceholder('Enter Your Password').click();
    await page.getByPlaceholder('Enter Your Password').fill('Aarti123@');
    await page.getByRole('button', {name:'LOGIN'}).click();
    await expect(page).toHaveURL('https://hirenova-workspace-seven.vercel.app/jobs-all/cmpmhhh8p00thwcvplgxujibn');
    //const allJobsSection = page.locator('.JobList-module__2CU8TW__jobList');
    //await expect(allJobsSection).toBeVisible();

    // First job card ka Save Job bookmark click
    //await allJobsSection
        //.getByRole('button', { name: 'Save job' })
        //.first()
        //.click();
     const jobCard = page
        .locator('[aria-label^="Select job:"]')
        .filter({ hasText: 'Staff Machine Learning Engineer #997' });
    await expect(jobCard).toBeVisible();
    await jobCard.click();
    await page
        .locator('[aria-label^="Select job:"]')
        .filter({ hasText: 'Staff Machine Learning Engineer #997' })
        .getByRole('button', { name: 'Save job' })
        .click();

});
