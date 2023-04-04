const Article = require('../models/articles');

const mainController = {
  home: (req, res) => {
    res.render('home');
  },

  product: async (req, res) => {
    const { id } = req.params;
    try {
      const article = await Article.findById(id);
      res.render('product', { article });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
};

module.exports = mainController;
