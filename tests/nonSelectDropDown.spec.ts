import test, { Page } from "@playwright/test";

test('nonSelectDropDown', async ( {page} ) => {
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/')
    await page.locator('#justAnInputBox').click();
    
    await selectChoice(page, ['choice 1', 'choice 2 2', 'choice 7'] )
    
    
    await page.pause();

})


async function selectChoice(page: Page, choices: string[]){
    for (let ch of choices){
        await page.locator('span.comboTreeItemTitle')
              .filter({hasText: ch}).first().click();
    }
}