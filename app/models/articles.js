// on ne require pas le module mongoose, on require l'instance déjà connectée !
const { Schema, model } = require("../database");

// on commence par définir un schéma : c'est le format de données
// c'est ce qui nous permet de s'assurer une certaine cohérence entre tous les documents

const articleSchema = new Schema({
  id: Number, // id est un nombre
  name: String, // name est une chaine de caractères
  img: String,
  state: String,
  description: String,
});

// on crée le model à partir de:
// - un nom, arbitraire
// - un schéma
// - le nom de la collection
const Article = model("Article", articleSchema, "article");

// il nous reste à exporter le model
module.exports = Article;
