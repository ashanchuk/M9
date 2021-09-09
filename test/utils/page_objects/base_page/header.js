const Collection = require('../base_elements/base_collection');
const Element = require('../base_elements/base_element');

class Header {
    constructor() {
        this.navigationButtons = new Collection(".top-navigation__row");
        this.searchButton = new Element("css", "button.header-search__button.header__icon");
        this.searchInput = new Element("id", "new_form_search");
    };
};

module.exports = Header;