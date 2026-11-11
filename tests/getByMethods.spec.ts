import test from "@playwright/test";

test('getByMethodsTest',async({page})=>{
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    // await page.getByLabel('E-Mail Address').fill('user1@test.in')
    // await page.getByLabel('Password').fill('pw123')
    // await page.pause();


    //getByRole is more better than getByLabel

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await page.getByPlaceholder('First Name').fill('user3@rediffmail.com')
    await page.getByAltText('naveenopencart').highlight();
    await page.waitForTimeout(10000);

})