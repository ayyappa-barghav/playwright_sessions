import test from "@playwright/test";


test('file upload test', async({page})=>{


  let [fileUpload,num] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#custom-id-btn').click()
   ])
})


test('file upload with type as file', async({page}) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html')
  let element = await page.locator('input[type="file"]').first();
  await element.setInputFiles('/Users/ayyappa_pusarla/Documents/upload.pdf')
  await page.waitForTimeout(5000)
  await element.setInputFiles([]);
  await page.pause();

})


test('multi file upload with input type as file', async({page})=>{
  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html')
  let multiFileInput = await page.locator('#multi-file');
  multiFileInput.setInputFiles(['/Users/ayyappa_pusarla/Documents/upload.pdf',
    '/Users/ayyappa_pusarla/Documents/image.png',
    '/Users/ayyappa_pusarla/Downloads/transfer.pdf'
  ])
  await page.waitForTimeout(5000)
  await multiFileInput.setInputFiles([]);
  await page.pause();
})

test('file upload test without input type as file', async({page})=>{
  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

  let [fileUpload] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#custom-upload-btn').click()
  ])

  await fileUpload.setFiles(['/Users/ayyappa_pusarla/Documents/upload.pdf',
    '/Users/ayyappa_pusarla/Documents/image.png',
    '/Users/ayyappa_pusarla/Downloads/transfer.pdf'])

    await page.waitForTimeout(5000)

    await fileUpload.setFiles([])

    await page.pause();

})