var PO = require('./../Protractor/PageObject.js');
var PR = require('./../Protractor/PrizeObject.js');

var pageObject = new PO.PageObject();
var prizeObject = new PR.PrizeObject();

var prizeValue = ['4','7','12','14','15','16','20','50','200'];
var prizeValueMax = ['40','70','120','140','150','160','200','500','2000'];

describe('Win chart calculation test', function() {

    it('Open Page ', function() {
       pageObject.OpenPage();
    });

    it('Rise bet ' , function(){
        prizeObject.riseBet('1','2');
    });

    it('Lower bet bet ' , function(){
        prizeObject.lowerBet('2','1');
    });

    it('Check win chart calculation - initial state' , function(){
        prizeObject.checkWinChart(prizeValue);
    });

    it('Rise bet to max value ' , function(){
        prizeObject.riseBetToMax();
    });

    it('Check win chart calculation - max state' , function(){
        prizeObject.checkWinChart(prizeValueMax);
    });

    it('Check if value will not exceed max ' , function(){
        prizeObject.riseBet('10','10');
    });

    it('Lower bet to min value ' , function(){
        prizeObject.lowBetToMin();
    });

    it('Check win chart calculation - initial state' , function(){
        prizeObject.checkWinChart(prizeValue);
    });

    it('Check if value cannot be lover than min ' , function(){
        prizeObject.lowerBet('1','1');
    });
});