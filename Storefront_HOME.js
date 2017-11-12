exports.Storefront_HOME = function() {


    this.shopButton = element(by.id('menu-item-7192'));
    this.blogButton = element(by.id('menu-item-107'));
    this.upperSearchField = element.all(by.css('.search-field')).get('0');
    this.lowerSearchField = element.all(by.css('.search-field')).get('1');

    this.OpenPage = function (){
        browser.ignoreSynchronization = true;
        browser.get('https://demo.woothemes.com/storefront/');
        expect(browser.getCurrentUrl()).toEqual('https://demo.woothemes.com/storefront/');
    };

    this.SearchForProduct = function (product){
        this.upperSearchField.sendKeys(product);
        this.lowerSearchField.sendKeys(product);
    };

};