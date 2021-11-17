const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'] });
  const page = await browser.newPage();
  page.goto("https://www.google.com");
})();