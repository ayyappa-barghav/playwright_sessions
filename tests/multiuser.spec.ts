import { test, BrowserContext, Page } from '@playwright/test';

test('has title', async ({ browser }) => {

    let ctx1: BrowserContext = await browser.newContext();
    let ctx2: BrowserContext = await browser.newContext();

    let p1: Page = await ctx1.newPage()
    let p2: Page = await ctx2.newPage()

    await p1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    await p2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    await p1.locator("//input[@name='email']").fill("user1@test.in")
    await p2.locator("//input[@name='email']").fill("user2@test.com")

    await p1.locator("//input[@name='password']").fill("pw123")
    await p2.locator("//input[@name='password']").fill("pw123")

    await p1.locator("//input[@type='submit']").click();
    await p2.locator("//input[@type='submit']").click();

    // await p1.pause();
    // await p2.pause();

    await p1.close();
    await p2.close();

    await browser.close();
});