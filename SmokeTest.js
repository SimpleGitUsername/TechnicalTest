var PO = require('./../Protractor/PageObject.js');
var PR = require('./../Protractor/PrizeObject.js');

var pageObject = new PO.PageObject();


describe('Smoke test', function() {

    it('Open Page ', function() {
        pageObject.OpenPage();
    });

    it('Check if displayed : Spin button ', function() {
        pageObject.checkIfDisplayed('spinButton');
    });

    it('Check if displayed : Slot machine ', function() {
        pageObject.checkIfDisplayed('slotMachineContainer');
    });

    it('Check if displayed : Reels ', function() {
        pageObject.checkIfDisplayed('reel1');
        pageObject.checkIfDisplayed('reel2');
        pageObject.checkIfDisplayed('reel3');
    });

    it('Check if displayed : WIn chart ', function() {
        pageObject.checkIfDisplayed('trPrize_45');
        pageObject.checkIfDisplayed('trPrize_41');
        pageObject.checkIfDisplayed('trPrize_35');
        pageObject.checkIfDisplayed('trPrize_38');
        pageObject.checkIfDisplayed('trPrize_34');
        pageObject.checkIfDisplayed('trPrize_40');
        pageObject.checkIfDisplayed('trPrize_37');
        pageObject.checkIfDisplayed('trPrize_33');
        pageObject.checkIfDisplayed('trPrize_32');
    });

    it('Check if displayed : Bet container ', function() {
        pageObject.checkIfDisplayed('betContainer');
        pageObject.checkIfDisplayed('lastWin');
        pageObject.checkIfDisplayed('credits');
        pageObject.checkIfDisplayed('bet');
        pageObject.checkIfDisplayed('betSpinUp');
        pageObject.checkIfDisplayed('betSpinDown');
    });

});