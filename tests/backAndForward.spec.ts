import test from "@playwright/test";

test('backAndForwardTest', async ({browser})=>{
    
    let page = await browser.newPage();
    await page.goto("https://www.google.com");
    await page.waitForTimeout(2000)

})