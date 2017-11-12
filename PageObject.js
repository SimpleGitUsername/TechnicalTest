exports.PageObject = function() {


    this.spinSlot = function(){
        browser.driver.findElement(by.id('spinButton')).click();
        expect(browser.driver.findElement(by.id('spinButton')).isDisabled);
    };

    this.OpenPage = function (){
        browser.ignoreSynchronization = true;
        browser.get('http://slotmachinescript.com/');
        expect(browser.getCurrentUrl()).toEqual('http://slotmachinescript.com/');
    };

    this.checkIfDisplayed = function(locator){
        expect(browser.driver.findElement(by.id(locator)).isDisplayed()).toBeTruthy();
    };

    this.checkCredits = function (value){
        expect(browser.driver.findElement(by.id('credits')).getText()).toEqual(value);
    };

    this.checkBet = function (value){
        expect(browser.driver.findElement(by.id('bet')).getText()).toEqual(value);
    };

};