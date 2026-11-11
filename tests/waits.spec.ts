
import test from "@playwright/test";

test('sudo element test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await page.getByRole('button',{name:'Continue'}).click();


    


    await page.pause();
})   