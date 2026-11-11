import test, { Frame, FrameLocator } from "@playwright/test";

test('frame test', async({page})=>{
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/')
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

   let iFrameLocator: FrameLocator =  page.frameLocator('#frame-one748593425'); // capture the frame

   //page.waitForTimeout(10000)

   await iFrameLocator.getByRole('textbox',{name:'Proposal title'}).fill('Automation Testing')

    let header = await page.getByRole('heading',{level:3}).innerText();
    console.log(header);

    await iFrameLocator.getByRole('textbox',{name:'Location'}).fill('Hyderabad')

   await page.pause();

})

test('not iframe', async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html')
    let headerText = await page.frameLocator('[name="main"]').getByRole('heading',{level:2}).innerText();
    console.log(headerText);

    let footerFrame = await page.frameLocator('[name="bot"]')
    let footerText = await footerFrame.getByRole('heading',{level:2}).innerText();
    console.log(footerText);
})

test('total frames count test', async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html')
    let allFrames: Frame[] = page.frames();
    //let allFrames = await page.locator('//frame').count()
    console.log('Total number of frames', allFrames);

    for (let ele of allFrames){
        console.log(ele.name(), ele.url());
    }
})

test('nested iframe test', async({page})=>{
    await page.goto('https://www.dezlearn.com/nested-iframes-example/')
    let parentFrame =  page.frameLocator('#parent_iframe')
    let childFrame = parentFrame.frameLocator('#iframe1')

    await childFrame.getByRole('button',{name:'Click Here'}).click()
    let message = await childFrame.locator('#processing').innerText();
    console.log(message);

    console.log('--------------------------------');

    await parentFrame.getByRole('button',{name:'Click Here'}).click();
    let outerMessage = await parentFrame.locator('#processing').innerText();
    console.log(outerMessage);

    

})