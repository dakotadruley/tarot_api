const { db, Card } = require('../index.js');

const init = async() => {
  await Card.sync({ force: true }); 
  console.log('Tables have synced!');
};

const seed = async() => {
  await db.sync({ force: true });
  
  await Card.create({
    name: 'The Fool',
    number: 'Zero',
    img: 'fool.com',
    description: 'The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation and believing in the universe.'
  });
  db.close();
  console.log('Seed Successful!');
};

init().then(() => {
  seed();
});
