import test from "@playwright/test";


test('windowHandleTest',async({browser})=>{

    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    
    await page1.goto('https://orangehrm.com/contact-sales')

   let [page2] =  await Promise.all([
        context1.waitForEvent('page'),
        page1.getByRole('link',{name:'About Us'}).click()
    ])

    await page2.waitForLoadState();

    let allPages = context1.pages();

    console.log('total number of pages', allPages.length);

    // await page2.bringToFront();

    let childHeader = await page2.getByText('About').textContent();
    console.log(childHeader);

    await page1.pause()


})    