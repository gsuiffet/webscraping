var express = require('express');
var app = express();
var puppeteer = require('puppeteer');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('public/src'));
app.use(express.static('public/src/img'));

const getData = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://fr.viadeo.com/fr/company/orangina-schweppes');
    await page.waitFor(1000);
    const result = await page.evaluate(() => {
        let name = document.querySelector('h1').innerText;
        let employees = document.querySelector(".element-value.gu.gu-last").innerText;
        return {name, employees}
    });
    await page.waitForSelector('img');
    const svgImage = await page.$('img');
    await svgImage.screenshot({
        path: 'public/src/img/logo.png',
        omitBackground: true,
    });
    browser.close();
    return result
};

app.get('/', function (req, res) {
    getData().then(value => {
        console.log(value)
    });
    res.render('index');
});

var port= (process.env.PORT || 8080);
app.listen(port, function () {
    console.log("Server listening on port 8080");
});