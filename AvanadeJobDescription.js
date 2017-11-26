var testData = require('./TestData.js');

exports.AvanadeJobDescription = function() {

    //Number of results found
    this.jobDescription = element(by.css('.job-description'));

    this.checkJobDescription = function( qualification ){
        expect(this.jobDescription.getText()).toContain(qualification);
    };
};