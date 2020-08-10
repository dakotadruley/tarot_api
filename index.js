require('dotenv').config();
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.db, { logging: false }); 

module.exports = db;


