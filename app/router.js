const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");

// Route home
router.get("/", mainController.home);

module.exports = router;
