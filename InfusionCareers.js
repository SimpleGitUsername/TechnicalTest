var testData = require('./TestData.js');

exports.InfusionCareers = function() {

    //Explore Avanade careers button
    this.exploreAvanadeCareersButton = element(by.id('cta_button_2574769_eb856e06-b244-40dd-837b-e00375b7835a'));

    this.exploreAvanadeCareersButtonClick = function(){
        browser.driver.sleep(2000);
        this.exploreAvanadeCareersButton.click();
        expect(browser.getCurrentUrl()).toContain(testData.AvanadeHomeURL);
    };

};