import test from "@playwright/test";

test('sudo element test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

    //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content')

    // await page.evaluate(()=>{
    //     return window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content')

    // })

    
})