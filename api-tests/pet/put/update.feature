Feature: Update pet

  @Pets
  Scenario: Update pet

    Given User performs PUT request to "pet" with
    """
   {
     "id": 1001,
     "name": "boggie",
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
  Scenario: Error when not finding id

    Given User performs PUT request to "pet" with
    """
   {
     "id": 122222,
     "name": "boggie",
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
    And User expects the status code is equals to "404"

  @Pets
  Scenario: Error when using a not valid id

    Given User performs PUT request to "pet" with
    """
   {
     "id": "asd",
     "name": "boggie",
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