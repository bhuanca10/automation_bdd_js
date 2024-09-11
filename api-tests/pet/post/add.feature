Feature: Post operations on Pets

  @Pets
  Scenario: Add pet

    Given User performs POST request to "pet" with
    """
   {
     "id": 1002,
     "name": "doggie",
     "category": {
       "id": 1,
       "name": "Dogs"
     },
     "photoUrls": [
       "string"
     ],
     "tags": [
       {
         "id": 0,
         "name": "black"
       }
     ],
     "status": "available"
   }
  """
    And User expects the status code is equals to "200"

  @Pets
  Scenario: Error when trying to add a pet without id
    Given User performs POST request to "pet" with
    """
   {
     "name": "doggie",
     "category": {
       "id": 1,
       "name": "Dogs"
     },
     "photoUrls": [
       "string"
     ],
     "tags": [
       {
         "id": 0,
         "name": "black"
       }
     ],
     "status": "available"
   }
  """
    And User expects the status code is equals to "400"
