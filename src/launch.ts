import { Browser, chromium, firefox, webkit } from "@playwright/test";

// (async ()=>{

//     let browser = await chromium.launch({headless:false})
//     let page = await browser.newPage();
//     await page.goto("https://www.google.com")
//     await page.close();

// })();



type BrowserName = "Chrome" | "Firefox" | "Edge" | "webkit"

async function launchBrowser(browserName: BrowserName){

    console.log(browserName);
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            return await chromium.launch({headless:false,channel:'chrome'})
        
        case 'edge':
            return await chromium.launch({headless:false,channel:'msedge'})
        
        case 'firefox':
            return await firefox.launch({headless:false})
        
        case 'webkit':
            return await webkit.launch({headless:false})

        default:
            console.log('invalid browser', browserName);
            throw Error('Invalid Browswer')
            break;
        }

}

let browser: Browser = await launchBrowser('FIREFOX')
let page = await browser.newPage();
await page.goto("https://www.google.com")
await browser.close();