const models = require('./models');

const init = async() => {
  await models.Cards.sync({ force: true }); 
  console.log('Tables have synced!');
};

init();
