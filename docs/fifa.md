# Get FIFA players

Get the list of football players of FIFA 2020 with their details.

**URL :** ```/fifa```

**Method :** ```GET```

**Auth required  :** NO

**Permissions required :** None

## Query parameters

| <div style="text-align: start; width: 170px">Object</div>  | <div style="width:500px">Description<div/> |<div style="width:150px">Type<div/> | 
| ------------- |-------------| :------: |
| limit      | [Optional] Use this parameter to change a maximum </br> size of resulting list. By default it is equal to 10.    | Integer |
| name      | [Optional] Use this parameter to filter resulting list of </br> players by name field.      | String |
| age      | [Optional] Use this parameter to filter resulting list of </br> players by age field.       | Integer |
| height     | [Optional] Use this parameter to filter resulting list of </br> players by height (in cm) field.      | Float |
| weight      | [Optional] Use this parameter to filter resulting list of </br> players by weight (in kg) field.     | Float |
| nationality      | [Optional] Use this parameter to filter resulting list of </br> players by nationality field.      | String |
| position      | [Optional] Use this parameter to filter resulting list of </br> players by positions field.      | String |
| overall      | [Optional] Use this parameter to filter resulting list of </br> players by overall field.     | Integer |
| potential      | [Optional] Use this parameter to filter resulting list of </br> players by potential field.      | Integer |
| gt_value      | [Optional] Use this parameter to filter resulting list of </br> players and get players with value (in euro) higher than </br> given in  query parameter.      | Integer |
| gt_wage      | [Optional] Use this parameter to filter resulting list of </br> players and get players with wage (in euro) higher than </br> given in  query parameter.      | Integer |
| preferred_food      | [Optional] Use this parameter to filter resulting list of </br> players by preferred_food field.      | String |
| team_jersey_number      | [Optional] Use this parameter to filter resulting list of </br> players by team_jersey_number field.      | Integer |
| nation_jersey_number      | [Optional] Use this parameter to filter resulting list of </br> players by nation_jersey_number field.      | Integer |

If **non-numeric data types** are given for **numeric** (Float, Integer) query parameters, then they are **NOT TAKEN INTO** account.

**For example:** ```curl https://players-rest-api.herokuapp.com/fifa?height=s``` **is identical to**  ```curl https://players-rest-api.herokuapp.com/fifa```.



## Success Response
**Code :** ```200 OK```

**Content examples**


This line of code: ```curl https://players-rest-api.herokuapp.com/fifa?limit=1&name=Messi```

Returns a **below given** JSON data.
```json
{
  "data": [
    {
      "_id": "60959017be3f13669643bb0c",
      "shirt_name": "Messi",
      "short_name": "L. Messi",
      "long_name": "Lionel Andrés Messi Cuccittini",
      "age": 32,
      "dob": "1987-06-24T00:00:00.000Z",
      "height": 170,
      "weight": 72,
      "nationality": "Argentina",
      "club": "FC Barcelona",
      "overall": 94,
      "potential": 94,
      "value": 95500000,
      "wage": 565000,
      "positions": "RW, CF, ST",
      "preferred_foot": "Left",
      "team_position": "RW",
      "team_jersey_number": 10
    }
  ]
}
```

## Error Responses
**Code :** ```404 Not Found```

**Code :** ```500 Internal Server Error```


**Content examples**


This line of code: ```curl https://players-rest-api.herokuapp.com/fif```

Returns a **below given** JSON data.
```json
{
  "message": "Command not found"
}
```
