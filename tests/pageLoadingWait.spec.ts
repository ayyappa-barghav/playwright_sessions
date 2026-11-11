import test from "@playwright/test";

test('pageLoadTest' , async ({page})=>{
    await page.goto("https://www.google.com",
        {waitUntil: "load"}
    )



})

//commit - element is there in DOM, but CSS/Images are still pending to be visible on page
//domcontentloaded - DOM is loaded but there is no guarantee that element is visible on page
//networkidle - in the last 500ms all the API calls that are settled and completed
//load - DOM is completely loaded - All Images/css/js/api or any kind of resources from server are loaded
// and visible on page and page is ready now