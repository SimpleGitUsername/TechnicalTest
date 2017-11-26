var IH = require('./../Protractor/InfusionHome.js');
var IC = require('./../Protractor/InfusionCareers.js');
var AH = require('./../Protractor/AvanadeHome.js');
var ASJ = require('./../Protractor/AvanadeSearchJobs.js');
var AJD = require('./../Protractor/AvanadeJobDescription.js');
var testData = require('./TestData.js');
var infusionHome = new IH.InfusionHome();
var infusionCareers = new IC.InfusionCareers();
var avanadeHome = new AH.AvanadeHome();
var avanadeSearchJobs = new ASJ.AvanadeSearchJobs();
var avanadeJobDescription = new AJD.AvanadeJobDescription();


describe('test case 3', function() {

    it('Should open Infusion home page', function() {
        infusionHome.OpenPage();
    });

    it('Should open Infusion career page', function() {
        infusionHome.exploreCareersButtonClick();
    });

    it('Should open Infusion career page', function() {
        infusionCareers.exploreAvanadeCareersButtonClick();
    });

    it('Should fill \"Search by keywords\" with search string ', function() {
        avanadeHome.inputKeyword(testData.JobSearchString);
    });

    it('Should select country \"United States\" ', function() {
        avanadeHome.countrySelect('United States')
    });

    it('Should Press \"Search\" Button ', function() {
        avanadeHome.searchButtonClick();
    });

    it('Should input keyword for job', function() {
        avanadeSearchJobs.openJobPage(testData.JobTitle)
    });

    it('Should check if job contains “Bachelor’s Degree in Business or IT.” qualification', function() {
        avanadeJobDescription.checkJobDescription(testData.qualification);
    });

});