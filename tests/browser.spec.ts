

import {Browser, chromium, firefox, Page, test, webkit} from '@playwright/test'

test('title test', async ({page})=>{
    await page.goto("https://www.google.com")
    let title = await page.title();
    console.log('title is', title);
    let appUrl = page.url()
    console.log('app url is',appUrl);
    
})

test('multiple browser test', async()=>{

    let browser:Browser = await chromium.launch({headless: false})

    //let browser: Browser = await chromium.launch({headless: false, channel:'chrome'})
    //let browser = await chromium.launch({headless:false,channel:'nightly build'})
    //let browser: Browser = await firefox.launch({headless:false})
    //let browser: Browser = await webkit.launch({headless:false})
    let page: Page = await browser.newPage();
    await page.goto("https://www.google.com")
    let title = await page.title();
    console.log('title is', title);
    let appUrl = page.url()
    console.log('app url is',appUrl);
    //await page.pause();
})