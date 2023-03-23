const Article = require("../models/articles");
const { all } = require("../router");

const articleController = {
  getAllArticle: async (req, res) => {
    try {
      const allArticles = await Article.find();
      console.log(allArticles);
      res.json(allArticles);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  // TODO: Recherche sur plusieurs champs ok mais mettre en place une field categorie plutôt que description !
  getArticlesByKeyword: async (req, res) => {
    const word = req.params.word;
    try {
      const articles = await Article.find({
        $or: [
          { name: { $regex: ".*" + word + ".*", $options: "i" } },
          { description: { $regex: ".*" + word + ".*", $options: "i" } },
        ],
      });
      console.log(articles);
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  getOneArticle: async (req, res) => {
    try {
      const article = await Article.findById();
      console.log(article);
      res.json(article);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
};

module.exports = articleController;
