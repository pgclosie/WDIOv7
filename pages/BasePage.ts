import { getTestConfiguration } from "../helpers/TestConfiguration";

export default class BasePage {

  public config = getTestConfiguration();

  private get acceptCookieLink ():WebdriverIO.Element { return $('#ccc-notify-accept'); }

  //private cookieAccepted: boolean = false

  public confirmCookies() {
    //if (!this.cookieAccepted) {
    this.acceptCookieLink.click();
    //this.cookieAccepted = true;
    // }
  }

  public stringFormat = (str: string, ...args: string[]) => {
    let formatted = str;
    for (let i = 0; i < args.length; i++) {
      const regexp = new RegExp("\\{" + i + "\\}", "gi");
      formatted = formatted.replace(regexp, args[i]);
    }
    return formatted;
  };
};