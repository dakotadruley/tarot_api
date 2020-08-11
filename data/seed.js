const { db, Card } = require('../index.js');

const seed = async() => {
  await db.sync({ force: true });

  const Fool = await Card.create({
    name: 'The Fool',
    number: 'Zero',
    img: 'fool.com',
    description: 'World famous Ivy League universityThe Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation and believing in the universe.'
  });
  db.close();
  console.log('Seed Successful!');
};

seed();
