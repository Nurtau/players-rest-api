# Get NBA players

Get the list of basketball players of NBA 2k20 with their details.

**URL :** ```/nba```

**Method :** ```GET```

**Auth required  :** NO

**Permissions required :** None

## Query parameters

| <div style="text-align: start; width: 170px">Object</div>  | <div style="width:500px">Description<div/> |<div style="width:150px">Type<div/> | 
| ------------- |-------------| :------: |
| limit      | [Optional] Use this parameter to change a maximum </br> size of resulting list. By default it is equal to 10.    | Integer |
| name      | [Optional] Use this parameter to filter a resulting list of </br> players by name field.      | String |
| overall      | [Optional] Use this parameter to filter a resulting list of </br> players by overall field.     | Integer |
| jersey      | [Optional] Use this parameter to filter a resulting list of </br> players by jersey field.       | Integer |
| team      | [Optional] Use this parameter to filter a resulting list of </br> players by team field.      | String |
| position      | [Optional] Use this parameter to filter a resulting list of </br> players by position field.      | String |
| height     | [Optional] Use this parameter to filter a resulting list of </br> players by height (in cm) field.      | Float |
| weight      | [Optional] Use this parameter to filter a resulting list of </br> players by weight (in kg) field.     | Float |
| gt_salary      | [Optional] Use this parameter to filter a resulting list of </br> players and get players with salary (in U.S. Dollar) higher than </br> given in  query parameter.      | Integer |
| country      | [Optional] Use this parameter to filter a resulting list of </br> players by country field.      | String |
| draft_year      | [Optional] Use this parameter to filter a resulting list of </br> players by draft_year field.      | Integer |
| draft_round      | [Optional] Use this parameter to filter a resulting list of </br> players by draft_round field.      | Integer |
| draft_peak     | [Optional] Use this parameter to filter a resulting list of </br> players by draft_peak field.      | Integer |
| college      | [Optional] Use this parameter to filter a resulting list of </br> players by college field.      | String |


If **non-numeric data types** are given for **numeric** (Float, Integer) query parameters, then they are **NOT TAKEN INTO** account.

**For example:** ```curl https://players-rest-api.herokuapp.com/nba?overall=12s``` **is identical to**  ```curl https://players-rest-api.herokuapp.com/fifa```.



## Success Response
**Code :** ```200 OK```

**Content examples**


This line of code: ```curl https://players-rest-api.herokuapp.com/nba?limit=2&name=James```

Returns a **below given** JSON data.
```json
{
  "data": [
    {
      "_id": "60963393361b5c9b187e0149",
      "full_name": "LeBron James",
      "overall": 97,
      "jersey": 23,
      "team": "Los Angeles Lakers",
      "position": "F",
      "dob": "1984-12-30T18:00:00.000Z",
      "height": 2.06,
      "weight": 113.4,
      "salary": 37436858,
      "country": "USA",
      "draft_year": 2003,
      "draft_round": 1,
      "draft_peak": 1
    },
    {
      "_id": "60963393361b5c9b187e014d",
      "full_name": "James Harden",
      "overall": 96,
      "jersey": 13,
      "team": "Houston Rockets",
      "position": "G",
      "dob": "1989-08-26T17:00:00.000Z",
      "height": 1.96,
      "weight": 99.8,
      "salary": 38199000,
      "country": "USA",
      "draft_year": 2009,
      "draft_round": 1,
      "draft_peak": 3,
      "college": "Arizona State"
    }
  ]
}
```

## Error Responses
**Code :** ```404 Not Found```

**Code :** ```500 Internal Server Error```


**Content examples**


This line of code: ```curl https://players-rest-api.herokuapp.com/nnba```

Returns a **below given** JSON data.
```json
{
  {
    "message": "Command not found"
  }
}
```