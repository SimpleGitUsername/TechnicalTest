var testData = require('./TestData.js');

exports.InfusionHome = function() {

    //Explore careers button
    this.exploreCareersButton = element(by.id('cta_button_2574769_92b747f0-e90a-42ec-8191-a6dd9e6c229f'));

    this.OpenPage = function (){
        browser.ignoreSynchronization = true;
        browser.get(testData.InfusionHomeURL);
        expect(browser.getCurrentUrl()).toEqual(testData.InfusionHomeURL);
    };

    this.exploreCareersButtonClick = function(){
        this.exploreCareersButton.click();
        expect(browser.getCurrentUrl()).toContain(testData.InfusionCareersURL);
    };

};