var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
      'SmokeTest.js'
      // 'todo-spec.js',
      // 'SpinTest.js'
  ],

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};