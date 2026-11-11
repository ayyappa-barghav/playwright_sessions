import test from "@playwright/test";

test('radioAndCheckBoxTest',async({page})=>{
    await page.goto("https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26")
    await page.getByRole('radio',{name:'Java'}).click();
    await page.getByRole('checkbox',{name:'Appium'}).click();
    await page.getByRole('radio',{name:'Male',exact:true}).click();
})