const logger = require("../../../config/logger.config");

class Element {
    constructor(elementName, selectorType, selector) {
        this.elementName = elementName;
        switch (selectorType) {
            case "css":
                this.element = element(by.css(selector));
                break;
            case "xpath":
                this.element = element(by.xpath(selector));
                break;
            case "name":
                this.element = element(by.name(selector));
                break;  
            case "id":       
                this.element = element(by.id(selector));
                break;
            case "class":       
                this.element = element(by.className(selector));
                break;   
            default:
                this.element = element(by.css(selector));
                break;
        };        
    };

    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };

    async getText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };

    sendKeys(args) {
        logger.info(`Element "${this.elementName}" is getting this keys: ${args}`);
        return this.element.sendKeys(args);
    }

    submit() {
        logger.info(`Element "${this.elementName}" is submitting`);
        return this.element.submit();
    }

    async highlightBorder (elementToHighlight, color) {
        logger.info(`Element "${this.elementName}" is submitting`);
        return await browser.executeScript("arguments[0].style.borderColor = '" + color + "'", elementToHighlight);
    }
};

module.exports = Element;