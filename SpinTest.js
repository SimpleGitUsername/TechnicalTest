var PO = require('./../Protractor/PageObject.js');
var credits;
var creditsAfterSpin;
var bet;

var pageObject = new PO.PageObject();

describe('Win chart calculation test', function() {

    it('Open Page ', function() {
        pageObject.OpenPage();
    });

    it('Get Bet and credit values ', function() {
        browser.driver.findElement(by.id('credits')).getText().then(function (text) {
            credits = text.toString();
        });

        browser.driver.findElement(by.id('bet')).getText().then(function (text) {
            bet = text.toString();
        });
    });

    it('Check bet and credits value ', function() {
        pageObject.checkCredits(credits);
        pageObject.checkBet('1');
    });

    it('Check if credits are taken for spin', function() {
        pageObject.spinSlot();
        creditsAfterSpin = Number(credits);
        creditsAfterSpin = creditsAfterSpin - Number(bet);
        pageObject.checkCredits(creditsAfterSpin.toString());
    });

    it('Check if spin button is available to click', function() {
        expect(browser.driver.findElement(by.id('spinButton')).isEnabled);
    });

});