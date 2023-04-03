const Article = require('../models/articles');
const { all } = require('../router');

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
    const { word } = req.params;
    try {
      const articles = await Article.find({
        $or: [
          { name: { $regex: '.*' + word + '.*', $options: 'i' } },
          { description: { $regex: '.*' + word + '.*', $options: 'i' } },
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
    const { id } = req.params;
    try {
      const article = await Article.findById(id);
      console.log(article);
      res.json(article);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  createOneArticle: async (req, res) => {
    console.log("Création d'un nouvel article en cour...");
    const { name, tag, img, state, description } = req.body;
    try {
      const article = await Article.create({
        name: name,
        tag: tag,
        img: img,
        state: state,
        description: description,
      });
      console.log(article);
      res.json(article);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  // === model pour insomnia :
  // {
  //   "name": "Nintendo GameCube",
  //   "tag": "console",
  //   "img": "url",
  //   "state": "bon",
  //   "description": "Je me s'apare de ma gamecube car je n'y jouent plus. Très bon état bien que quelques trâce d'usures."
  // }
};

module.exports = articleController;
