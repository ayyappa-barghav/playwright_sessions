import test from "@playwright/test";

test('keyboard enter test', async( {page} )=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    let searchBox =  page.getByRole('textbox', {name:'Search'})
    await searchBox.fill('macbook')
    await searchBox.press('Enter')
    await page.pause();
})


test('keyboard tab sequence with Accessibility form submission test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await page.getByRole('textbox', {name:'First Name'}).fill('Ayyappa');
    
    await page.keyboard.press('Tab');
    await page.keyboard.type('Automation')
    
    await page.keyboard.press('Tab');
    await page.keyboard.type('ayyappa.automation@123.com')

    await page.keyboard.press('Tab');
    await page.keyboard.type('0909090909')

    await page.keyboard.press('Tab');
    await page.keyboard.type('pw123')

    await page.keyboard.press('Tab');
    await page.keyboard.type('pw123')

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight')

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space')

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await page.pause();


})


test('keyboard copy paste', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await page.getByRole('textbox', {name:'First Name'}).fill('Ayyappa');

    await page.getByRole('textbox', {name:'First Name'}).press('ControlOrMeta+A')
    await page.getByRole('textbox', {name:'First Name'}).press('ControlOrMeta+C')

    await page.keyboard.press('Tab')
    await page.keyboard.press('ControlOrMeta+V');
    await page.waitForTimeout(2000)
    await page.keyboard.press('ControlOrMeta+A')
    await page.keyboard.press('Backspace')

    await page.getByRole('link', {name:'Forgotten Password'}).click({modifiers:['ControlOrMeta']})

    
    await page.pause();


})