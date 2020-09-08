require('dotenv').config();
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URI, 
  { logging: false, 
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    } });

const Card = db.define('cards', {
  title: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  upright: {
    type: Sequelize.TEXT
  },
  reversed: {
    type: Sequelize.TEXT
  },
  correspondences: {
    type: Sequelize.JSONB
  }
});

module.exports = {
  db,
  Card
};
