Feature: Test clicking a button and pressing the Enter key
  As a user of the Flutter web application
  I want to be able to click a button and press the Enter key
  So that I can perform an action in the application

  Scenario: Click the button and press the Enter key
    Given I am on the Flutter web application
    When I click the "my-button" button
    And I press the Enter key
    Then I should see the result
