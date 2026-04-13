Feature: Cart

  Scenario: Add product
    Given I am logged in
    When I add a product to cart
    Then I should see it in cart
    And I should verify the thank you message