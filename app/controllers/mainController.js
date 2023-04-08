const Articles = require('../models/articles');
const Users = require('../models/users');

const mainController = {
  home: (req, res) => {
    res.render('home');
  },

  product: async (req, res) => {
    const { id } = req.params;
    try {
      const article = await Articles.findById(id).populate('user');
      // const article = await Articles.findById(id);
      console.log(article);
      res.render('product', { article });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
};

module.exports = mainController;
