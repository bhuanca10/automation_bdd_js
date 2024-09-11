Feature: Get operations on Pets

  @Pets
  Scenario: Get pets by status

    Given User performs GET request to "pet/findByTags?tags=black"
    And User expects the status code is equals to "200"

  @Pets
  Scenario: Get error for not sending tags

    Given User performs GET request to "pet/findByTags"
    And User expects the status code is equals to "400"