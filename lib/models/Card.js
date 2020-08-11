const Sequelize = require('sequelize');
const db = require('db');

const Card = db.define('cards', {
  name: {
    type: Sequelize.STRING,
  },
  number: {
    type: Sequelize.STRING,
  },
  img: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Card;

