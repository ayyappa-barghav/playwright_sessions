import test from "@playwright/test";

test('web table single selection', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html')

   while (true) {

        let isUserPresent = await page.locator('td').filter({hasText:'harper'}).first().isVisible();
        if (isUserPresent) {
            //user is found on the 1st page itself..
            await page.locator('table#dataTable tr').filter({ hasText: 'harper' }).first().getByRole('checkbox').check();
            break;
        }
        else {
            //username is not present on the 1st page, pagination logic:
            //click on the next icon:
            let nextEle = page.getByRole('button', { name: '›' });
            await nextEle.click();
            await page.waitForTimeout(1500);

            let isNextEleDisabled = await nextEle.isDisabled();
            if (isNextEleDisabled) {
                console.log('pagination is over...username is not found...');
                break;
            }
        }


    }
    await page.pause();
})


test('pagination with multiple selection', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html')
    
    while(true){
        
        let allUserChecks = await page.locator('#dataTable tr').filter({hasText:'john_doe'}).getByRole('checkbox').all();
        if(allUserChecks.length>0){
            for(let ele of allUserChecks){
                await ele.click();
            }
        }
            let nextEle = page.getByRole('button', { name: '›' });
            let isNextEleDisabled = await nextEle.isDisabled();
            if (isNextEleDisabled) {
                console.log('pagination is over...username is not found...');
                break;
            }else{
                await nextEle.click()
                await page.waitForTimeout(2000)
            }

    }
    await page.pause();
    
})


test('web table assignment', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html')
    await page.getByRole('textbox',{name:'Username'}).fill('barghav');
    await page.getByRole('textbox',{name:'Email'}).fill('bhargav.ram@test.com');
    await page.getByRole('textbox',{name:'Company'}).fill('Netflix');
    await page.getByRole('textbox',{name:'City'}).fill('Hyerabad');
    await page.getByRole('button',{name:'Add'}).click();

    await page.getByRole('button',{name:'1'}).first().click()

    await page.waitForTimeout(2000)

    while(true){
        let isUserExist = await page.locator(`td:has-text('barghav')`).first().isVisible();
        if(isUserExist){
        await page.locator('#dataTable tr').filter({hasText:'barghav'}).getByRole('checkbox').click();
        break;
        }else{
            let nextEle = page.getByRole('button', { name: '›' });
            let isNextEleDisabled = await nextEle.isDisabled();
            if (isNextEleDisabled) {
                console.log('pagination is over...username is not found...');
                break;
            }else{
                await nextEle.click()
                await page.waitForTimeout(2000)
            }
        }
    

    }

    await page.pause();
})