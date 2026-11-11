import test, { expect } from "@playwright/test";

test('file download test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download')

    let [download1] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', {name:'some-file.txt'}).click()
    ])

     //make sure that there is no failure during downloading process....    
        expect(await download1.failure()).toBeNull();
     
    //get the file name:
        console.log('file name', download1.suggestedFilename());

    //download the file in different path
    let filePath = '/Users/ayyappa_pusarla/Downloads/'+ download1.suggestedFilename();
    download1.saveAs(filePath);


})