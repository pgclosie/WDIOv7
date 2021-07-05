import BasePage from "./BasePage";
import {timeout} from "rxjs/operators";

class HomePage extends BasePage {

  // element selectors

  //id - ideal but with a potentially auto-generated ID we may have issues on the next build
  //get findGymSearchField ():WebdriverIO.Element { return $('#location-finder__input-00000160-4eeb-de17-a579-dffb7ab70000'); }

  //alternative using class, best alternative for now - recommended approach - test specific data-testId attribute unique to elements
  get findGymSearchField ():WebdriverIO.Element { return $('.hero-location-finder__input.js-location-finder-form-input.pac-target-input'); }
  private gymLocationTileSelector = '.js-location-name={0}';

  // interaction functions
  enterFindGymSearchText(location: string) {
    this.findGymSearchField.waitForDisplayed();
    this.findGymSearchField.click();
    browser.keys(location);
    //requires a small delay otherwise control not receiving the Enter keystroke
    browser.pause(500);
    browser.keys('Enter');
  }

  open() {
    browser.url(this.config.baseUrl);
  }

  // verification functions

  verifyGymTileIsDisplayed(gymName: string)
  {
    const gymTile:string = this.stringFormat(this.gymLocationTileSelector, gymName);
    const element:WebdriverIO.Element = $(gymTile);
    element.waitForDisplayed();

  }
}

export default new HomePage();
