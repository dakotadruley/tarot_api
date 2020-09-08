require('dotenv').config();
// const Card = require('./lib/models/Card.js');

const { majorArcanaCard } = require('./lib/scraper/site.js');

// marjorArcana()
//   .then(urls => Promise.all(urls));

majorArcanaCard()
  .then(data => console.log(data));
