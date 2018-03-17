const db = require('../db');
const Sequelize = require('sequelize');

const Shows = db.define('Shows', {   // Define creates a table
  name: Sequelize.STRING
})  

module.exports = Shows;