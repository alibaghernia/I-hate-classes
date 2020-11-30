const puppeteer = require('puppeteer');

(async() => {

    let username = 'YOUR_USER_NAME'
    let password = 'YOUR_PASSWORD'
    let loginUrl = 'https://lms123.tvu.ac.ir/login/index.php' //This address is for the server of Yazd, universities of District 2. Enter the address of your university server

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'],
        timeout: 30000
    });
    const page = await browser.newPage();
    //login
    await page.goto(loginUrl);
    await page.type('#username', username);
    await page.type('#password', password);
    await page.click('#loginbtn');
})();