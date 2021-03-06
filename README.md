# Players REST API
## Overview
It is a REST API which returns a data about FIFA 2020 and NBA 2k20 players.


Used *Node.js, Express.js and MongoDB* to implement the REST API.

The data were retrieved from [FIFA](https://www.kaggle.com/stefanoleone992/fifa-20-complete-player-dataset) and [NBA](https://www.kaggle.com/isaienkov/nba2k20-player-dataset), and formatted by Python library pandas.

If you want to check it out, feel free to run in terminal ```curl https://players-rest-api.herokuapp.com/fifa?overall=92```

If it **succeeds**, you will get 
```json
{
  "data": [
    {
      "_id": "60959017be3f13669643bb0e",
      "shirt_name": "Neymar",
      "short_name": "Neymar Jr",
      "long_name": "Neymar da Silva Santos Junior",
      "age": 27,
      "dob": "1992-02-05T00:00:00.000Z",
      "height": 175,
      "weight": 68,
      "nationality": "Brazil",
      "club": "Paris Saint-Germain",
      "overall": 92,
      "potential": 92,
      "value": 105500000,
      "wage": 290000,
      "positions": "LW, CAM",
      "preferred_foot": "Right",
      "team_position": "CAM",
      "team_jersey_number": 10,
      "nation_position": "LW",
      "nation_jersey_number": 10
    }
  ]
}
```
If it **fails** you will get
```json
{
  "message": "System failed, please try again"
}
```

## Documentation
1. [FIFA 2020 players](/docs/fifa.md)
2. [NBA 2k20 players](/docs/nba.md)

## Installation 
To run it locally on your own computer:
* [Fork](https://help.github.com/articles/fork-a-repo/) this repository
* [Clone](https://help.github.com/articles/cloning-a-repository/) it to your
  local device
* Install the dependencies by ```npm install```
* Run it by ```npm start```
