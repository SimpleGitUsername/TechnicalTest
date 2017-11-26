var testData = require('./TestData.js');

exports.AvanadeSearchJobs = function() {

    //Number of results found
    this.results = element.all(by.css('.meta-item.meta-result-count')).get('1');

    //Check number of jobs displayed in 'results'
    this.checkResults = function( results ){
        browser.driver.sleep(2000);
        expect(this.results.getText()).toEqual(results + ' results');
    };

    //count and check how many jobs are displayed on list
    this.checkDisplayedJobsNumber = function ( numberOfJobs){
        var count = element.all(by.repeater('job in searchResults'));
        count.then(function(result){
            expect(result.length).toEqual(numberOfJobs);
        });
    };

    this.checkDisplayedJobsNumberGreaterThan = function ( numberOfJobs){
        browser.driver.sleep(2000);
        var count = element.all(by.repeater('job in searchResults'));
        count.then(function(result){
            expect(result.length).toBeGreaterThan(numberOfJobs);
        });
    };

    this.openJobPage = function ( jobTitle){
        browser.driver.sleep(3000);
        element(by.linkText(jobTitle)).click();
    };

};