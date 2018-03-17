const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/decent');
const mongoDB = mongoose.connection;
mongoDB.once('connected', () => {
  console.log('connected to the mongodb, punk.');
})