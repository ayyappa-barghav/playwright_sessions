import test from "@playwright/test";

test('locatorPractice', async({page})=>{
    await page.goto("https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26")
    await page.getByRole('textbox',{name:'First Name'}).fill('Ayyappa')
    await page.getByLabel('Last Name').fill('Pusarla')
    await page.getByText('Password').fill('pw123')
    await page.pause();

    // //await page.getByRole('textbox',{name:'Date of Birth'}).fill('10/08/1992')
    // await page.getByRole('textbox',{name:'Preferred Meeting Time'}).fill('04:00:PM')
    // await page.getByRole('textbox',{name:'Schedule Interview'}).fill('10/08/2026')
    // await page.getByRole('textbox',{name:'Birth Month'}).fill('August 1992')
    // await page.waitForTimeout(20000)

})
