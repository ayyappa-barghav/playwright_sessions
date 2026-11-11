import test from "@playwright/test";

test('locatorChain', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
     page.locator('form').getByRole('textbox',{name:'First Name'});

})


test('selectAllCheckBox', async( {page} ) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html')
    let checkBoxes = await page.locator('#resultTable').locator('tr').locator('td').getByRole('checkbox').all();
    for(let ele of checkBoxes){
        ele.click();
        await page.waitForTimeout(1000);
    }
    await page.pause();

})


test('get the bowler row data', async ( {page} )=>{
    let playerName = 'Traveen Mathew'
    await page.goto('https://www.cricinfo.com/series/lanka-premier-league-2026-1537330/galle-gallants-vs-jaffna-kings-final-1537354/full-scorecard')
    let bowlerData = await page.locator('table').last().locator('tr').filter({hasText:playerName}).locator('td').allInnerTexts();
    for (let ele of bowlerData){
        console.log(ele);
        console.log("================");
    }
})


test('get the table data', async ({page}) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    let rowData = await page.locator('#table02').locator('tr').allInnerTexts();
    for (let ele of rowData){
        console.log(ele);
        console.log('==============');
    }
})

test('amazon test', async ({page})=>{
    await page.goto('https://www.amazon.in/ref=nav_logo')
    await page.getByRole('searchbox').fill('macbook');
    await page.locator('.left-pane-results-container').locator('div').filter({hasText:'neo'}).last().highlight();;
    await page.pause();

})

test('google search', async ({page})=>{
    await page.goto('https://www.google.com')
    await page.getByRole('combobox').fill('naveen automation labs');
    await page.getByRole('listbox').locator('li div').filter({hasText:'youtube'}).highlight();
    await page.getByRole('listbox').locator('li div').filter({hasText:'github'}).highlight();
    await page.pause();
})

test('flipkart debugger', async ({page})=>{
    await page.goto('https://flipkart.com')
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: '✕' }).click();
    await page.getByRole('textbox').fill('iphone')
    await page.locator('li.Swx5kP').filter({hasText:'pro'}).last().highlight()
    await page.pause();  
})