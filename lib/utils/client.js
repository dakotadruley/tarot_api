require('dotenv').config();
const pg = require('pg');
const { Sequelize } = require('sequelize');
const Client = pg.Client;

const sequelize = new Sequelize(process.env.sequelize); 

const client = new Client(sequelize);

client.connect()
  .then(() => console.log('connected to db', sequelize))
  .catch(err => console.error('connection error', err));


client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;
