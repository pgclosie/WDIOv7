//example capabilitites for running crossbrowser
const build = "WDIOv7Tests";

module.exports = {

    chrome: {
        build: build + " - Chrome",
        maxInstances: 5,
        platform: "Windows 10",
        browserName: "Chrome",
        version: "latest"
        //e.g. version: "latest-1"
        //e.g. version: "82.0"
    },
    firefox: {
        build: build + " - Firefox",
        maxInstances: 5,
        platform: "Windows 10",
        browserName: "Firefox",
        version: "latest",
        resolution: "1280x800"
    },
    safari: {
        build: build + " - Safari",
        maxInstances: 5,
        platform: "MacOS Big sur",
        browserName: "Safari",
        version: "14.0",
        "safari.cookies": true,
        resolution: "1280x1024"
    },
    edge: {
        build: build + " - Edge",
        maxInstances: 5,
        platform: "Windows 10",
        browserName: "MicrosoftEdge",
        version: "latest"
    },
    ie11: {
        build: build + " - IE11",
        maxInstances: 5,
        platform: "Windows 10",
        browserName: "Internet Explorer",
        version: "11.0"
    }
};
