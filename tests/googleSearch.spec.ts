import test from "@playwright/test";


test('google search', async ( {page} ) =>{
    await page.goto('https://www.google.com/')
    await page.getByRole('combobox',{name:'Search'}).fill('naveen automation labs')
     

} ) 


test('fetch the data from all rows', async ( {page} ) => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp')
    let allRowData = await page.locator('.w3-example').first().locator('tr td').allInnerTexts();
    for (let ele of allRowData){
        console.log(ele);
        console.log('=================');
    }
})