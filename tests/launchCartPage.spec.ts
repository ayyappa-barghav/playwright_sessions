import test from "@playwright/test";

// use:{
//     storageState:'./openCartState.json'
// }

test.use({
     storageState:'./openCartState.json'
})

test('storageStateLogin',async({page})=>{
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart')
    await page.pause();
    
})