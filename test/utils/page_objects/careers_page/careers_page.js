const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");
const logger = require("../../../config/logger.config");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.findButton = new Element("class","header-search__button header__icon");
    };

    open() {
        logger.info(`Opening Careers page`);
        return super.open("https://www.epam.com/careers");
    };

    async executeScript(script) {
        logger.info(`Executing "${script}" script`);
            await browser.executeScript(script);
        };
};

module.exports = CareersPage;