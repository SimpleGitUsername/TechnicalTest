var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
      // 'SmokeTest.js',
      // 'todo-spec.js',
      // 'SpinTest.js'
      //'StorefrontScript.js'
      'Case1.js',
      'Case2.js',
      'Case3.js'
  ],
    getPageTimeout: 3000000,
    allScriptsTimeout: 3000000,
    onPrepare: function () {
        browser.manage().window().setSize(1920, 1080);
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};