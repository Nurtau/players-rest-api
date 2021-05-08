const express = require("express");
const fifaController = require("../controllers/fifaController");
const nbaController = require("../controllers/nbaController");

const router = express.Router();

router.get("/fifa", fifaController.getPlayer);
router.get("/nba", nbaController.getPlayer);

module.exports = router;
