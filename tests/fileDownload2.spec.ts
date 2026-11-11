import test, { expect } from "@playwright/test";
import fs from 'fs';

test('file download', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')
    //await page.getByRole('link', {name:'test_upload_file.txt'}).click();

    let [download] =  await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', {name:'package'}).click()
    ])

    expect(await download.failure()).toBeNull();

    let fileName = download.suggestedFilename();
    console.log(fileName);

    let filePath = '/Users/ayyappa_pusarla/Documents/' + fileName;
    await download.saveAs(filePath)

    let fileSize = fs.statSync(fileName).size;
    console.log('downloaded file size is ', fileSize);
    expect(fileSize).toBeGreaterThan(0)


})