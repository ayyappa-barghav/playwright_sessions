import test from "@playwright/test";

test('shadow DOM Test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html')

    await page.getByRole('button',{name:'Click Me'}).click();


    await page.getByRole('textbox',{name:'Username'}).fill('Ayyappa')
    await page.getByRole('textbox',{name:'Email'}).fill('Pusarla')
    await page.getByRole('textbox',{name:'Bio'}).fill('working on playwright')

    //2 Level

    await page.getByPlaceholder('Type inside nested shadow...').fill('level2')

    //3 Level
    await page.getByRole('button',{name:'Deep Click'}).click();

    //4 Level
    await page.getByRole('button',{name:'Slotted Button'}).click();

    //To Do List

    await page.getByRole('checkbox',{name:'Write Playwright tests'}).click();
    await page.getByRole('checkbox',{name:'Handle Shadow DOM locators'}).click();
    await page.getByRole('textbox',{name:'Add new todo...'}).fill('work on assignments')
    await page.getByRole('button',{name:'Add'}).click();

    await page.locator('#framework-select').selectOption('Playwright')

    await page.pause();


    
})