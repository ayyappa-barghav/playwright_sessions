import test from "@playwright/test";

test('registerTest', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    //await page.getByRole('textbox',{name:'Password'}).fill('pw123');
    await page.getByRole('heading',{name:'Returning Customer', exact:true}).highlight();
    await page.getByRole('textbox',{name:'E-Mail Address', exact:true}).highlight();
    await page.getByRole('link',{name:'Forgotten Password'}).nth(0).highlight();
    await page.pause();

    //can be used for demo purpose and debug purpose
})