const db = require('../db');
const Sequelize = require('sequelize');

const Media = db.define('Media', {   // Define creates a table
  name: Sequelize.STRING
})  

module.exports = Media;