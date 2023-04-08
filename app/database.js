const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connecté à la BDD');
});

module.exports = mongoose;

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
