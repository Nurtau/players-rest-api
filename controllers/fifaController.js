const FifaPlayer = require("../models/FifaPlayer");
const constants = require("../constants");

const getPlayersFilter = (queries) => {
	const filter = {};

	//checking for queries and appending them to the filter object
	if (queries.name)
		filter.short_name = { $regex: new RegExp(queries.name, "g") };
	if (queries.age && !Number.isNaN(+queries.age)) filter.age = queries.age;
	if (queries.height && !Number.isNaN(+queries.height))
		filter.height = queries.height;
	if (queries.weight && !Number.isNaN(+queries.weight))
		filter.weight = queries.weight;
	if (queries.nationality) filter.nationality = queries.nationality;
	if (queries.club) filter.club = { $regex: new RegExp(queries.club, "g") };
	if (queries.position)
		filter.positions = { $regex: new RegExp(queries.position, "g") };
	if (queries.overall && !Number.isNaN(+queries.overall))
		filter.overall = queries.overall;
	if (queries.potential && !Number.isNaN(+queries.potential))
		filter.potential = queries.potential;
	if (queries.gt_value && !Number.isNaN(+queries.gt_value))
		filter.value = { $gt: queries.gt_value };
	if (queries.gt_wage && !Number.isNaN(+queries.gt_wage))
		filter.wage = { $gt: queries.gt_wage };
	if (queries.preferred_foot) filter.preferred_foot = queries.preferred_foot;
	if (queries.team_jersey_number && !Number.isNaN(+queries.team_jersey_number))
		filter.team_jersey_number = queries.team_jersey_number;
	if (queries.nation_jersey_number && !Number.isNaN(+queries.nation_jersey_number))
		filter.nation_jersey_number = queries.nation_jersey_number;

	return filter;
};

exports.getPlayer = async (req, res, next) => {
	const filter = getPlayersFilter(req.query);
	try {
		let limitVal = null;
		if (req.query.limit && !Number.isNaN(+req.query.limit)) {
			limitVal = Math.floor(+req.query.limit);
		}
		const players = await FifaPlayer.find(filter).limit(
			limitVal ?? constants.DEFAULT_LIMIT
		);
		return res.status(200).json({
			data: players,
		});
	} catch (err) {
		const error = new Error("System failed, please try again");
		error.statusCode = 500;
		next(error);
	}
};
