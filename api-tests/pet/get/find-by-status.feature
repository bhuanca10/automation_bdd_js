Feature: Get operations on Pets

  @Pets
  Scenario: Get pets by status

    Given User performs GET request to "pet/findByStatus?status=available"
    And User expects the status code is equals to "200"

  @Pets
  Scenario: Get error for invalid status

    Given User performs GET request to "pet/findByStatus?status=notvalidstatus"
    And User expects the status code is equals to "400"