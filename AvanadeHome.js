var testData = require('./TestData.js');

exports.AvanadeHome = function() {

    //'Search by keywords' textbox
    this.keyword = element(by.id('searchboxfilter'));

    //'Location' dropdown
    this.location = element(by.id('countries'));

    //'Role' dropdown
    this.role = element(by.id('roles'));

    //'Search' Button
    this.search = element(by.id('jobsearchclick'));

    this.searchButtonClick = function(){
        this.search.click();
        browser.driver.sleep(2000);
    };

    this.inputKeyword = function ( text ){
        this.keyword.clear();
        this.keyword.sendKeys(text);
    };

    this.countrySelect = function ( country ){
        this.location.click();
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            element(by.linkText(country)).click();
        });
    };

};