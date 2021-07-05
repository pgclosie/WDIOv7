const browserCapabilities = require('./config_helpers/capabilities.js');
const colors = require("colors/safe");

const logger = {
  log: function(msg) {
    process.stdout.write(msg + "\n");
  },
  error: function(msg) {
    process.stderr.write(msg + "\n");
  }
};

const browserName = 'chrome';

exports.config  = {

  baseUrl: 'https://www.nuffieldhealth.com/gyms#main',
  specs: ['./features/functional/**/*.feature'],
  waitforTimeout: 20000,
  logLevel: "error",
  maxInstances: 2,


  reporters: [
    [
      "allure",
      {
        outputDir: "./allure-results/",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true
      }
    ]
  ],

  capabilities: [
    browserCapabilities[browserName],
  ],

  framework: "cucumber",

  cucumberOpts: {
    backtrace: true,
    requires: ['tsconfig-paths/register'],
    failAmbiguousDefinitions: true,
    failFast: false,
    format: ["pretty"],
    colors: true,
    ignoreUndefinedDefinitions: false,
    source: true,
    profile: [],
    require: ["./stepDefinitions/*.ts"],
    snippets: undefined,
    strict: true,
    tagExpression: "not @ignore",
    tagsInTitle: false,
    timeout: 20000,
    dryRun: false
  },


  before: function before(capabilities, specs) {
    /**
     * Setup the Chai assertion framework
     */
    const chai = require("chai");

    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },

  afterSession(config, capabilities, specs) {

  },

  beforeFeature(uri, feature) {
    logger.log(
        colors.inverse(`\nExecuting Feature: ${feature.name}`)
    );
  },

  beforeScenario(world) {
    logger.log(colors.bold(`\nExecuting Scenario: ${world.pickle.name}`));
  },

  afterStep(step, scenario, { error, duration, passed }) {
    logger.log(`  ${step.text} -- ${passed ? colors.green("Passed") : colors.red("Failed")}`);
  },

  afterScenario(world, { error, duration, passed }) {
    if (passed) {
      const status = colors[
          { passed: "green", skipped: "yellow", failed: "red" }.failed
          ](error);
      logger.log(`  ${world.pickle.name} -- ${String(status)}`);
    }

  },

  afterFeature(uri, feature) {
    logger.log(
        colors.inverse(`\Completed Feature: ${feature.name}`)
    );
  },

};