const video = require('wdio-video-reporter');

exports.config = {
    runner: 'local',
    specs: [
      './features/**/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
      maxInstances: 1,
      browserName: 'chrome'
    }],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['spec', [video, {
        outputDir: './reports/videos',
        saveAllVideos: true,
        videoSlowdownMultiplier: 3
      }]],
    cucumberOpts: {
      requireModule: ['@babel/register'],
      require: ['./step-definitions/**/*.js'],
      backtrace: false,
      compiler: [],
      dryRun: false,
      failFast: false,
      format: ['pretty'],
      colors: true,
      snippets: true,
      source: true,
      profile: [],
      strict: false,
      tagExpression: '',
      timeout: 60000,
      ignoreUndefinedDefinitions: false
    }
  }
  