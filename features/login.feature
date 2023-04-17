Feature: Login

  Scenario: Successful login
    Given I am on the login page
    When I enter "user@example.com" as the email
    And I enter "password" as the password
    And I click the login button
    Then I should be on the dashboard page
