const video = require("wdio-video-reporter");

exports.config = {
  runner: "local",
  specs: ["./features/**/*.feature"],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
    },
  ],
  logLevel: "debug",
  bail: 0,
  baseUrl: "http://localhost:3000",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["selenium-standalone"],
  framework: "cucumber",
  // reporters: ['spec', [video, {
  //     outputDir: './reports',
  //     saveAllVideos: true,
  //     videoSlowdownMultiplier: 3
  //   }],
  //   ['allure', {
  //     outputDir: './reports/allure-raw',
  //     disableWebdriverStepsReporting: true,
  //     disableWebdriverScreenshotsReporting: true,
  //     useCucumberStepReporter: true
  //   }],],
  reporters: [
    "spec",
    [
      video,
      {
        outputDir: "./reports",
        saveAllVideos: true,
        videoSlowDownMultiplier: 3,
      },
    ],
    [
      "allure",
      {
        outputDir: "assure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        useCucumberStepReporter: true
      },
    ],
  ],
  cucumberOpts: {
    requireModule: ["@babel/register"],
    require: ["./step-definitions/**/*.js"],
    backtrace: false,
    compiler: [],
    dryRun: false,
    failFast: false,
    format: ["pretty"],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
