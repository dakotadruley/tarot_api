require('dotenv').config();
const models = require('./index.js');

const init = async() => {
  await models.Cards.sync({ force: true }); 
  console.log('Tables have synced!');
};

init();
