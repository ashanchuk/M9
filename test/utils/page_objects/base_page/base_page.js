const Header = require('./header');
const logger = require("../../../config/logger.config");

class BasePage {
    constructor() {
        this.Header = new Header();
    };

    wait(waitInMillieconds) {
        logger.info(`Waiting "${waitInMilliseconds}" milliseconds`);
        return browser.sleep(waitInMillieconds);
    };

    getCurrentUrl() {
        const currentUrl = browser.getCurrentUrl();
        logger.debug(`Current url is "${currentUrl}"`)
        return currentUrl;
    };

    open(url) {
        logger.info(`Opening "${url}" url`);
        return browser.get(url);
    };

    getTitle() {
        logger.info(`Getting title`);
        return browser.getTitle();
    };

    // close() {
    //     return browser.close();
    // }
};

module.exports = BasePage;