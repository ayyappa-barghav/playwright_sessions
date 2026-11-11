import test from "@playwright/test";

test('locators test' , async({page}) => {
    
    await page.goto("https://www.shapemyinterview.com/login")
    let emailId = page.getByRole('textbox', {name: 'Username or email'})
    await emailId.fill('pvbr.ayyappa@gmail.com')
    
    await page.getByRole('textbox',{name:'Password'}).fill('Ayyappa@1992')
    await page.getByRole('button',{name:'Log in'}).click();

    
    
    await page.waitForTimeout(5000)

    
})