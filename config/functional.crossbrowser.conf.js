//example config for running crossbrowser
const config = require("./functional.conf.js");
const browserCapabilities = require('./config_helpers/capabilitiesLambdaTest')

const browserName = process.env.browser || "chrome";

config.config.cucumberOpts.tagExpression = `@cross-browser and not @not-${browserName} and not @ignore`;

module.exports.config = {
  ...config.config,

  services: [["lambdatest", {
    "tunnel": true,
  }]],
  path: "/wd/hub",
  hostname: 'hub.lambdatest.com',
  port: 80,
  waitforTimeout: 20000,

  key: "TBC",
  user: "pclose",

  capabilities: [
    browserCapabilities[browserName]
  ]

}