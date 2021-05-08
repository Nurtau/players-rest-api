const NbaPlayer = require("../models/NbaPlayer");
const constants = require("../constants");

const getPlayersFilter = (queries) => {
	const filter = {};

	//checking for queries and appending them to the filter object
	if (queries.name)
		filter.full_name = { $regex: new RegExp(queries.name, "g") };
	if (queries.overall && !Number.isNaN(+queries.overall))
		filter.overall = queries.overall;
	if (queries.jersey && !Number.isNaN(+queries.jersey))
		filter.jersey = queries.jersey;
	if (queries.team) filter.team = { $regex: new RegExp(queries.team, "g") };
	if (queries.position)
		filter.position = { $regex: new RegExp(queries.position, "g") };
	if (queries.height && !Number.isNaN(+queries.height))
		filter.height = queries.height;
	if (queries.weight && !Number.isNaN(+queries.weight))
		filter.weight = queries.weight;
	if (queries.gt_salary && !Number.isNaN(+queries.gt_salary))
		filter.salary = { $gt: queries.gt_salary };
	if (queries.country) filter.country = queries.country;
	if (queries.draft_year && !Number.isNaN(+queries.draft_year))
		filter.draft_year = queries.draft_year;
	if (queries.draft_round && !Number.isNaN(+queries.draft_round))
		filter.draft_round = queries.draft_round;
	if (queries.draft_peak && !Number.isNaN(+queries.draft_peak))
		filter.draft_peak = queries.draft_peak;
	if (queries.college)
		filter.college = { $regex: new RegExp(queries.college, "g") };

	return filter;
};

exports.getPlayer = async (req, res, next) => {
	const filter = getPlayersFilter(req.query);
	try {
		let limitVal = null;
		if (req.query.limit && !Number.isNaN(+req.query.limit)) {
			limitVal = Math.floor(+req.query.limit);
		}
		const players = await NbaPlayer.find(filter).limit(
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
