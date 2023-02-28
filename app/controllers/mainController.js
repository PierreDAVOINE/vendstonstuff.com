const mainController = {
  home: (req, res) => {
    console.log("coucou");
    res.render("home");
  },
};

module.exports = mainController;
