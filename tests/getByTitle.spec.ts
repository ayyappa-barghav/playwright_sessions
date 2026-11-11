import test, { selectors } from "@playwright/test";

test('dataTestId', async({page})=>{
    // await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html')
    // await page.getByTestId('username-input').fill('ayyappapusarla')
    // await page.getByTestId('email-input').fill('pw123')
    // await page.pause();

    // selectors.setTestIdAttribute('id')
    // await page.goto('https://app.hubspot.com/signup-hubspot/crm?step=landing_page&uuid=139b7a01-0032-4997-861e-c699a4c58dee')
    // await page.getByTestId('FormControl1').fill('user1@gmail.com')
    // await page.pause();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await page.getByTitle('naveenopencart').highlight();
    await page.pause();
})