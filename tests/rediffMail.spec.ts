import test from "@playwright/test";

test('rediff mail assignment', async({page})=>{
    page.on('dialog', async(popup)=>{
        if(popup.type() === 'alert'){
            console.log(popup.message());
            popup.accept();
        }
    })
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')
    await page.locator('#password').fill('Ayyappa')
    await page.getByRole('button', {name:'Log In'}).click();
    await page.waitForTimeout(10000);
    await page.pause();


})