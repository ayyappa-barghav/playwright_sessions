import test from "@playwright/test";

test('selectDropDown',async({page})=>{
    await page.goto('https://orangehrm.com/contact-sales');
    let value = await page.getByRole('combobox',{name:'country'}).selectOption('India')
    console.log(value);

    value = await page.getByRole('combobox',{name:'country'}).selectOption({label:'Afghanistan'})
    console.log(value);

    value = await page.getByRole('combobox',{name:'country'}).selectOption({value:'Bahamas'})
    console.log(value);

    value = await page.getByRole('combobox',{name:'country'}).selectOption({index:20})
    console.log(value);

    let sValue = await page.getByRole('combobox',{name:'country'}).inputValue();
    console.log('value selected:', sValue);

})


test('multiselectionDropDown',async ({page}) => {
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html')
    // let selectValue:String[] = await page.locator('[name=Month]').selectOption(["January","August","November"])
    // console.log(selectValue);

    await page.locator('[name=Month]').selectOption(["January","August","November"])
    let selectValue = page.locator('[name=Month]').inputValue();
    console.log(selectValue);
    await page.pause();
})