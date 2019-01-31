const rp = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.lasikvisioninstitute.com/locations/';

rp
.launch()
.then(function(browser) {
    return browser.newPage();
})
.then(function(page) {
    return page.goto(url)
    .then(function() {
        return page.content();
    })
})
.then(function(html) {
    $('.address', html).each(function() {
        let addresses = $(this).text();
        console.log(addresses.substr(addresses.length - 6));
    });
})
.catch(function(err) {
    console.log(err);
});