Feature: Feature cart1

  Scenario: Add product
    Given I am logged in Feature cart1
    When I add a product to Feature cart1
    Then I should see it in Feature cart1
    And I should verify the thank you message for Feature cart1