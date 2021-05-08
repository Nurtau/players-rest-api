const mongoose = require("mongoose");

const fifaPlayerSchema = new mongoose.Schema({
	shirt_name: String,
	short_name: String,
	long_name: String,
	age: Number,
	dob: Date,
	height: Number,
	weight: Number,
	nationality: String,
	club: String,
	overall: Number,
	potential: Number,
	value: Number,
	wage: Number,
	positions: String,
	preferred_foot: String,
	team_position: String,
	team_jersey_number: Number,
	nation_position: String,
	nation_jersey_number: Number,
});

module.exports = mongoose.model("FifaPlayer", fifaPlayerSchema);
