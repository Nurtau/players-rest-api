const mongoose = require("mongoose");

const nbaPlayerSchema = new mongoose.Schema({
	full_name: String,
	overall: Number,
	jersey: Number,
	team: String,
	position: String,
	dob: Date,
	height: Number,
	weight: Number,
	salary: Number,
	contry: String,
	draft_year: Number,
	draft_round: Number,
	draft_peak: Number,
	college: String,
});

module.exports = mongoose.model("NbaPlayer", nbaPlayerSchema);
