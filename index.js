require('dotenv').config();
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

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

module.exports = {
  db,
  Card
};
