# WDIOv7
Case Study

# Pre Req

Node v12 (tested with v12.21.0)
NPM  v6 (tested with v6.14.11)

# Running tests

To execute tests, perform the below steps

*  navigate to folder :
    ````
        WDIOv7
    ````
*  Install dependancies :
    ````
        npm ci
    ````
*  Execute tests with wdio conf file passed as parameter:
    ```
        npm run e2e:local -- .\config\functional.conf.js
    ```
*  Generating allure reports:
  
    * To generate and serve the reports to a browser
    ````
        npm run reports 
    ````