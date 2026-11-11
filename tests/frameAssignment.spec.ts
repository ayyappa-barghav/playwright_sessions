import test from "@playwright/test";

test('frame assignment test', async({page})=>{
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/')
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

    await page.waitForTimeout(3000)

    let frameLocator = page.locator('#formTemplateContainer').frameLocator(`#frame-one748593425`)
    

    await frameLocator.getByRole('textbox', {name:'Proposal title'}).fill('Ayyappa')
    await frameLocator.getByRole('textbox',{name:'Location'}).fill('NAL')
    await frameLocator.getByRole('textbox',{name:'Description'}).fill('frame assignment')
    await frameLocator.locator('.file_upload').setInputFiles('/Users/ayyappa_pusarla/Downloads/some-file.txt')
    await frameLocator.getByRole('textbox',{name:'First Name'}).fill('Ayyappa')
    await frameLocator.getByRole('textbox',{name:'Last Name'}).fill('Pusarla')
    await frameLocator.getByRole('textbox',{name:'Street Address'}).fill('California')
    await frameLocator.getByRole('textbox',{name:'Address Line 2'}).fill('USA')
    await frameLocator.getByRole('textbox',{name:'City'}).fill('Califronia')
    await frameLocator.locator('.drop_down').selectOption('California')
    await frameLocator.getByRole('textbox',{name:'Zip Code'}).fill('2423342')
    await frameLocator.getByRole('textbox',{name:'Phone Number'}).fill('87678678')
    await frameLocator.getByRole('textbox',{name:'Email Address'}).fill('user1@test.in')
    //frameLocator.getByRole('button',{name:'Submit'}).click();


    await page.pause();
})