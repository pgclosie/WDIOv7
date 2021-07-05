import { After } from "@cucumber/cucumber";

After((scenarioResult) => {
    // @ts-ignore
    if (scenarioResult.result.status === "failed") {
        browser.takeScreenshot();
    }
    // @ts-ignore
    return scenarioResult.result.status;
});