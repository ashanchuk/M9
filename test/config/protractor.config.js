// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../specs/*.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
      }
  }