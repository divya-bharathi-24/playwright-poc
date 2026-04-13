
@smoke @login
Feature: Login functionality

  Scenario Outline: Login with different users
    Given I navigate to the login page
    When I login with username "<username>" and password "<password>"
    Then I should see the inventory page

  Examples:
    | username       | password       |
    | standard_user  | secret_sauce   |