import test from "@playwright/test";

test('practice',  async( {page} ) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await page.getByRole('textbox', {name:'First Name'}).fill('Ayyappa');
    await page.getByLabel('Last Name').fill('Pusarla')
    let value = await page.getByText('Ayyappa').inputValue();
    console.log(value);
})


test('locatorChain', async( {page} ) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    await page.
                locator('#table01').
                locator('tr').
                filter({hasText:'GUI'}).
                getByRole('checkbox').
                click();
    await page.
                locator('#table01').
                locator('tr').
                filter({hasText:'GUI'}).
                getByText('Delete').
                click();

    await page.pause();            
                
    
})

test('locatorChain2', async ( {page} ) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    let office = await page.locator('#table02').locator('tr').filter({hasText:'Ashton Cox'}).locator('td').nth(2).innerText();
    console.log('office of the person:' , office);
    
})

//locator(`.ci-scorecard-table`).locator(`tr`).filter({hasText:`Brandon King`}).first().locator(`td`).nth(1)

test('fetchRuns', async ({page}) => {
    await page.goto('https://www.cricinfo.com/series/pakistan-in-west-indies-2026-1538621/west-indies-vs-pakistan-2nd-test-1538631/full-scorecard')
    let bowler = await page.locator('.ci-scorecard-table').locator('tr').filter({hasText:'Brandon King'}).first().locator('td').nth(1).innerText();
    console.log('Wicket Taker:', bowler);
})