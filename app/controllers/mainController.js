const mainController = {
  home: (req, res) => {
    res.render("home");
  },

  product: (req, res) => {
    res.render("product");
  },
};

module.exports = mainController;
