exports.PrizeObject = function() {

    this.riseBet = function (initial,final){
        expect(browser.driver.findElement(by.id('bet')).getText()).toEqual(initial);
        browser.driver.findElement(by.id('betSpinUp')).click();
        expect(browser.driver.findElement(by.id('bet')).getText()).toEqual(final);
    };

    this.lowerBet = function (initial,final){
        expect(browser.driver.findElement(by.id('bet')).getText()).toEqual(initial);
        browser.driver.findElement(by.id('betSpinDown')).click();
        expect(browser.driver.findElement(by.id('bet')).getText()).toEqual(final);
    };

    this.riseBetToMax = function (value){
        for (i = 1; i < 11; i++) {
            expect(browser.driver.findElement(by.id('bet')).getText()).toEqual(i.toString());
            browser.driver.findElement(by.id('betSpinUp')).click();
        }
    };

    this.lowBetToMin = function (value){
        for (i = 10; i > 0; i--) {
            expect(browser.driver.findElement(by.id('bet')).getText()).toEqual(i.toString());
            browser.driver.findElement(by.id('betSpinDown')).click();
        }
    };

    this.checkWinChart = function (chartValue){
        expect(browser.driver.findElement(by.id('trPrize_45')).getText()).toEqual(chartValue[0]);
        expect(browser.driver.findElement(by.id('trPrize_41')).getText()).toEqual(chartValue[1]);
        expect(browser.driver.findElement(by.id('trPrize_35')).getText()).toEqual(chartValue[2]);
        expect(browser.driver.findElement(by.id('trPrize_38')).getText()).toEqual(chartValue[3]);
        expect(browser.driver.findElement(by.id('trPrize_34')).getText()).toEqual(chartValue[4]);
        expect(browser.driver.findElement(by.id('trPrize_40')).getText()).toEqual(chartValue[5]);
        expect(browser.driver.findElement(by.id('trPrize_37')).getText()).toEqual(chartValue[6]);
        expect(browser.driver.findElement(by.id('trPrize_33')).getText()).toEqual(chartValue[7]);
        expect(browser.driver.findElement(by.id('trPrize_32')).getText()).toEqual(chartValue[8]);
    };

};