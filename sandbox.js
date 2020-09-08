require('dotenv').config();
// const Card = require('./lib/models/Card.js');

const { majorArcana, majorArcanaCard } = require('./lib/scraper/site.js');

majorArcana()
  .then(urls => Promise.all(urls.map(url => majorArcanaCard(url))))
  .then(console.log);
