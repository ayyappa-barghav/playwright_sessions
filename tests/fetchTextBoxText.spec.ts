import test, { selectors } from "@playwright/test";

test('fetchtextboxcontent', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await page.getByText('First Name').fill('NAL')
    let value = await page.getByText('First Name').inputValue()
    let content = await page.getByRole('textbox',{name:'Last Name'}).textContent();
    console.log(value, content);
    await page.pause()
})