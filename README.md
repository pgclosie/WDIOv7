# WDIOv7
Case Study

# Pre Req

Node v12 (tested with v12.21.0)
NPM  v6 (tested with v6.14.11)
Install Java 1.8 JDK

# Running tests

To execute tests, perform the below steps from root directory

*  Install dependencies :
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
