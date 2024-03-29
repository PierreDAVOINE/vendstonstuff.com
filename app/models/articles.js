require('../database');
const mongoose = require('mongoose');

// on commence par définir un schéma : c'est le format de données
// c'est ce qui nous permet de s'assurer une certaine cohérence entre tous les documents

const articleSchema = new mongoose.Schema({
  name: String, // name est une chaine de caractères
  tag: String,
  img: String,
  state: String,
  description: String,
  price: Number,
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
});

// on crée le model à partir de:
// - un nom, arbitraire
// - un schéma
// - le nom de la collection
const Articles = mongoose.model('Articles', articleSchema, 'article');

// il nous reste à exporter le model
module.exports = Articles;
