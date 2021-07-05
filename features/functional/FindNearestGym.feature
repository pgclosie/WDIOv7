@cross-browser
Feature: Find Nearest Gym

  Scenario: Search for nearest Gym - Town
    Given Nuffield Gym home page
    When search for gym near to 'Town'
    Then the following nearest gym locations are displayed
      |Portsmouth|Yeovil|Chichester|

  Scenario: Search for nearest Gym - Postcode
    Given Nuffield Gym home page
    When search for gym near to 'BT411BT'
    Then the following nearest gym locations are displayed
      |Glasgow Giffnock|East Kilbride|Glasgow Central|

