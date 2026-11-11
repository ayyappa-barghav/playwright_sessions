import test, { chromium, expect } from "@playwright/test";

(   async ()=>{
    let browser = await chromium.launch({headless:false,channel:'chrome'})
    let page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.locator("//input[@name='email']").fill("user1@test.in")
    await page.locator("//input[@name='password']").fill("pw123")
    await page.locator("//input[@type='submit']").click();

    expect(await page.title()).toBe('My Account')
    await page.context().storageState({path: 'openCartState.json'})
    //await page.pause();
    page.close();
    browser.close();
})();