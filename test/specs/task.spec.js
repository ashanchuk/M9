const { browser, until, element, by } = require("protractor");
const { DriverProvider } = require("protractor/built/driverProviders");
const PageFactory = require("../utils/page_objects/pageFactory");

describe('actions on the page', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();
  });

  fit('should search from Careers page', async function () {
    await PageFactory.getPage("Home").open();
    await PageFactory.getPage("Careers").findButton.click();

    await PageFactory.getPage("Careers").wait(2000);
    await PageFactory.getPage("Careers").Header.searchInput.sendKeys('test');
    const buttonToClick = await element(by.className("header-search__submit"));
    await browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", buttonToClick);

    await PageFactory.getPage("Careers").wait(5000);
    await browser.actions().mouseMove(buttonToClick).perform();
    await browser.actions().click().perform();

    await PageFactory.getPage("Careers").wait(2000);
  
    const pageTitle = await PageFactory.getPage("Careers").getTitle();
    expect(pageTitle).toContain('Search');

  });

});