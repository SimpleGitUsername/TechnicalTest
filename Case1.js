var IH = require('./../Protractor/InfusionHome.js');
var IC = require('./../Protractor/InfusionCareers.js');
var AH = require('./../Protractor/AvanadeHome.js');
var ASJ = require('./../Protractor/AvanadeSearchJobs.js');
var AJD = require('./../Protractor/AvanadeJobDescription.js');
var infusionHome = new IH.InfusionHome();
var infusionCareers = new IC.InfusionCareers();
var avanadeHome = new AH.AvanadeHome();
var avanadeSearchJobs = new ASJ.AvanadeSearchJobs();
var avanadeJobDescription = new AJD.AvanadeJobDescription();

describe('test case 1', function() {

    it('Should open Infusion home page', function() {
        infusionHome.OpenPage();
    });

    it('Should open Infusion career page', function() {
        infusionHome.exploreCareersButtonClick();
    });

    it('Should open Infusion career page', function() {
        infusionCareers.exploreAvanadeCareersButtonClick();
    });

    it('Should fill \"Search by keywords\" with \"QA\"', function() {
        avanadeHome.inputKeyword('QA');
    });

    it('Should select country \"Poland\" ', function() {
        avanadeHome.countrySelect('Poland')
    });

    it('Should Press \"Search\" Button ', function() {
        avanadeHome.searchButtonClick();
    });

    it('Should check if displayed results number is 5 ', function() {
        avanadeSearchJobs.checkResults('5');
    });

    it('Should check if 5 jobs are displayed on list ', function() {
        avanadeSearchJobs.checkDisplayedJobsNumber(5);
    });

});