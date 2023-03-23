require("dotenv").config();

const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const articleController = require("./controllers/articleController");

// Route home
router.get("/", mainController.home);
router.get("/product", mainController.product);

// Routes API
router.get("/articles", articleController.getAllArticle);
router.get("/articles/:word", articleController.getArticlesByKeyword);
router.get("/article/:id", articleController.getOneArticle);

module.exports = router;
