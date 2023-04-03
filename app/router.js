require('dotenv').config();

const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const articleController = require('./controllers/articleController');

// Route home
router.get('/', mainController.home);
router.get('/product', mainController.product);

// Routes API : lectures
router.get('/articles', articleController.getAllArticle);
router.get('/articles/:word', articleController.getArticlesByKeyword);
router.get('/article/:id', articleController.getOneArticle);

// Routes API : écritures
router.post('/article', articleController.createOneArticle);

module.exports = router;
