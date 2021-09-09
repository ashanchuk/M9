const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const logger = require("../../../config/logger.config");

class HomePage extends BasePage {
    constructor() {
        super();
        // this.acceptButton = new Element("xpath", "//span[contains(text(),'Accept')]");
        this.findJobButton = new Element("xpath", "/html/body/div[2]/main/div[1]/div[6]/section/div[2]/div[3]/div/a");
    };

    open() {
        logger.info(`Opening Home page`);
        return super.open("https://www.epam.com/");
    };

    async executeScript(script) {
        logger.info(`Executing "${script}" script`);
            await browser.executeScript(script);
        };
};

module.exports = HomePage;