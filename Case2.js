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

describe('test case 2', function() {

    it('Should open Infusion home page', function() {
        infusionHome.OpenPage();
    });

    it('Should open Infusion career page', function() {
        infusionHome.exploreCareersButtonClick();
    });

    it('Should open Infusion career page', function() {
        infusionCareers.exploreAvanadeCareersButtonClick();
    });

    it('Should select country \"Japan\" ', function() {
        avanadeHome.countrySelect('Japan')
    });

    it('Should Press \"Search\" Button ', function() {
        avanadeHome.searchButtonClick();
    });

    it('Should check if at last one job is on the list ', function() {
        avanadeSearchJobs.checkDisplayedJobsNumberGreaterThan(0);
    });

});