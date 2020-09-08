require('dotenv').config();
const { db, Card } = require('../lib/models/Card.js');
const { majorArcana, majorArcanaCard, minorArcana, minorArcanaCard } = require('../lib/scraper/site.js');

const init = async() => {
  await Card.sync({ force: true }); 
  console.log('Tables have synced!');
};

const seed = async() => {
  await db.sync({ force: true });
 
  const majorCards = await majorArcana()
    .then(urls => Promise.all(urls.map(url => majorArcanaCard(url))));
  
  
  const minorCards = await minorArcana()
    .then(urls => Promise.all(urls.map(url => minorArcanaCard(url))));

  await Card.bulkCreate([...majorCards, ...minorCards]);

  db.close();
  console.log('Seed Successful!');
};

init().then(() => {
  seed();
});



