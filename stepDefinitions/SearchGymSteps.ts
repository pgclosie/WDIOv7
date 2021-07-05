import { Then, When, Given, DataTable } from '@cucumber/cucumber'
import HomePage from "../pages/HomePage"

Given("Nuffield Gym home page", () => {
  browser.deleteAllCookies()
  HomePage.open()
  HomePage.confirmCookies()
});

When("search for gym near to {string}", (location:string) => {
  HomePage.enterFindGymSearchText(location)
});

Then("the following nearest gym locations are displayed", (locations: DataTable) => {
  // @ts-ignore
  const gymLocations: string[] = locations.rawTable[0];
  gymLocations.forEach(location => {
    HomePage.verifyGymTileIsDisplayed(location)
  });
});

When("search for gym from my current location", () => {
  HomePage.clickSearchNearbyLocationLink()
});