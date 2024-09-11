Feature: Get operations on Pets

  @Pets
  Scenario: Get pets by id

    Given User performs GET request to "pet/10"
    And User expects the status code is equals to "200"

  @Pets
  Scenario: Get error for not finding id

    Given User performs GET request to "pet/12222"
    And User expects the status code is equals to "404"

  @Pets
  Scenario: Get error for not valid id

    Given User performs GET request to "pet/asd"
    And User expects the status code is equals to "400"