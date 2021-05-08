require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const playerRouter = require("./routes/playerRouter");
const app = express();

//app settings
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET");
	next();
});

//app routes
app.use("/", playerRouter);

//NOT FOUND
app.use((req, res, next) => {
	const error = new Error("Command not found");
	error.statusCode = 404;
	throw error;
});

//ERROR
app.use((err, req, res, next) => {
	const message = err.message;
	const status = err.statusCode;
	res.status(status ?? 500).json({
		message: message,
	});
});

//connecting to mongodb and listening to port
mongoose
	.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
	.then(() => {
		app.listen(process.env.PORT|| 3000);
	})
	.catch((err) => {
		console.log(err);
	});
