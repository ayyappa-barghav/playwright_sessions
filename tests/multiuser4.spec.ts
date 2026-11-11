import test from "@playwright/test";

test('four multi users', async({browser}) =>{
    let ctx1 = await browser.newContext();
    let ctx2 = await browser.newContext();
    let ctx3 = await browser.newContext();
    let ctx4 = await browser.newContext();

    let page1 = await ctx1.newPage();
    let page2 = await ctx2.newPage();
    let page3 = await ctx3.newPage();
    let page4 = await ctx4.newPage();

    await page1.goto('http://localhost:3000/')
    await page1.locator('#usernameInput').fill('User1')
    await page1.locator('#joinBtn').click();
    await page1.locator('#messageInput').fill('Hi How are you all');
    await page1.locator('#sendBtn').click();
    

    await page2.goto('http://localhost:3000/')
    await page2.locator('#usernameInput').fill('User2')
    await page2.locator('#joinBtn').click();
    await page2.locator('#messageInput').fill('I am good');
    await page2.locator('#sendBtn').click();

    await page3.goto('http://localhost:3000/')
    await page3.locator('#usernameInput').fill('User3')
    await page3.locator('#joinBtn').click();
    await page3.locator('#messageInput').fill('I am good');
    await page3.locator('#sendBtn').click();
    await page3.locator('#messageInput').fill('How are you');
    await page3.locator('#sendBtn').click();
    

    await page4.goto('http://localhost:3000/')
    await page4.locator('#usernameInput').fill('User4')
    await page4.locator('#joinBtn').click();
    await page4.locator('#messageInput').fill('I am good user1');
    await page4.locator('#sendBtn').click();
    await page4.locator('#messageInput').fill('How are you user1, user2, user3');
    await page4.locator('#sendBtn').click();

    
    await page1.pause();
    await page2.pause();
    await page3.pause();
    await page4.pause();
})