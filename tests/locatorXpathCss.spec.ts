import test from "@playwright/test";

test('xpath,css',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await page.locator('')
    await page.pause();
})