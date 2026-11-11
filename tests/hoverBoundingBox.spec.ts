import test from "@playwright/test";

test('icici mouse hover', async({page})=>{
    await page.goto('https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html')
    
    let allSolidColors = await page.locator('.highcharts-series-0 .highcharts-point').all();

    await page.pause();
})