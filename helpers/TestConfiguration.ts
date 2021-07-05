

// Add any custom attributes that tests needs for e.g. `baseUrl` which comes from *.conf.js and needs to be accessed within the tests.
// see HomePage.ts / BasePage.ts for usage
export interface TestConfiguration {
  applitoolsKey: string;
  baseUrl: string;
}

export function getTestConfiguration() {
  return (browser as any).config as TestConfiguration
}
