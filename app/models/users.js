// on ne require pas le module mongoose, on require l'instance déjà connectée !
require('../database');
const mongoose = require('mongoose');

// on commence par définir un schéma : c'est le format de données
// c'est ce qui nous permet de s'assurer une certaine cohérence entre tous les documents

const userSchema = new mongoose.Schema({
  email: String, // name est une chaine de caractères
  firstname: String,
  isadmin: String,
  lastname: String,
  nickname: String,
  paswword: String,
});

// on crée le model à partir de:
// - un nom, arbitraire
// - un schéma
// - le nom de la collection
const Users = mongoose.model('Users', userSchema, 'user');

// il nous reste à exporter le model
module.exports = Users;
