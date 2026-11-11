import test, { Locator } from "@playwright/test";

test('getTheValueTest', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.getByRole('textbox',{name:'e-mail address'}).fill('user1@test.in')
    let value = await page.getByRole('textbox',{name:'e-mail address'}).inputValue()
    console.log(value);
    await page.pause();
})


test('getAllTheLinks',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
    let allLinks =  await page.locator('a[href]').all();
    console.log('toatl links:', allLinks.length);

    let totalLinks = await page.locator('//a').count();
    console.log('total links with count method:', totalLinks);

})

test('get all the links text test', async({page})=>{
    await page.goto('https://www.flipkart.com/')
    let allLinks = await page.locator('a[href]').all()

    for (let ele of allLinks){
        let linkText = await ele.textContent();
        let href = await ele.getAttribute('href');
        console.log(linkText);
    }
})

test('find the specific link test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    let allLinks = await page.locator('.list-group-item').all();

    for (let ele of allLinks){
        console.log(await ele.textContent());
        if(await ele.textContent()==='Recurring payments'){
            console.log('Specific Link Found');
             break;
        }
    }
})


test('fetch images test', async ({page}) => {

    await page.goto('https://flipkart.com')
    let images = await page.locator('img').all();

    for (let ele of images){
        console.log(await ele.textContent()+"------"+ await ele.getAttribute('alt'));

    }
    
})

test('footerPractice', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account')
    let footerLinks = await page.locator('.col-sm-3 .list-unstyled a').all();

    for (let ele of footerLinks){
        console.log(await ele.textContent());
        ele.click();
        await page.waitForTimeout(2000)
        let title = await page.title();
        await page.waitForTimeout(2000)
        console.log(title);
        await page.goBack();
    }
})