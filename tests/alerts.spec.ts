import test from "@playwright/test";

test('alert handle test', async ({page}) => {
    page.on('dialog', async(popup)=>{
        if(popup.type() === 'alert'){
            console.log(popup.message());
            await popup.accept();
        }
    })

    page.on('dialog', async(popup)=>{
        if(popup.type() === 'confirm'){
            console.log(popup.message());
            await popup.accept();// this will click ok
            //await popup.dismiss() - this will click cancel
        }
    })

    page.on('dialog', async(popup)=>{
        if(popup.type() === 'prompt'){
            console.log(popup.message());
            await popup.accept('Naveen Automation Labs'); // click ok and enter text message
        }
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await page.pause();
})