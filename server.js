var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var puppeteer = require('puppeteer');
var fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('public/src'));
app.use(express.static('public/src/img'));

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/getdata', function (req, res) {
    var error = "Please enter a correct name";
    const getData = async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('http://fr.viadeo.com/fr/company/'+ req.body.corporate);
        await page.waitFor(1000);
        const result = await page.evaluate(() => {
            let name = document.querySelector('h1').innerText;
            let employees = document.querySelector(".element-value.gu.gu-last").innerText;
            return {name, employees}
        });
        await page.waitForSelector('img');
        const svgImage = await page.$('img');
        await svgImage.screenshot({
            path: 'public/src/img/logo'+req.body.corporate+'.png',
            omitBackground: true,
        });
        browser.close();
        return result
    };
    getData().then(value => {
        const corporate = JSON.stringify(value);
        console.log("value", value);
        fs.writeFileSync('public/corporate.json', corporate, 'utf8', function (err){
            if (err){
                console.log(err);
            }
        });
        return res.send(value);
    }, function () {
        return res.send({error:error});
    });
});

var port= (process.env.PORT || 8080);
app.listen(port, function () {
    console.log("Server listening on port 8080");
});