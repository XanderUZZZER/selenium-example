const { Builder, By, Key, until } = require('selenium-webdriver')
let fs = require('fs')
const chrome = require('selenium-webdriver/chrome')

  (async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.manage().window().maximize()
      let encodedString = await driver.takeScreenshot();
      await fs.writeFileSync('./image.png', encodedString, 'base64');
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      //await driver.quit();
    }
  })();