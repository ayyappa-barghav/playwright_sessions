import test from "@playwright/test";

test('fill with delay', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.getByRole('textbox', {name:'E-Mail Address'}).pressSequentially('Ayyappa', {delay:1000})
    await page.pause();
})