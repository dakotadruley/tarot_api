require('dotenv').config();
// const Card = require('./lib/models/Card.js');

const {  minorArcana, minorArcanaCard } = require('./lib/scraper/site.js');

// majorArcana()
//   .then(urls => Promise.all(urls.map(url => majorArcanaCard(url))))
//   .then(console.log);


minorArcana().then(urls => Promise.all(urls.map(url => minorArcanaCard(url))))
  .then(console.log);
