require('dotenv').config();
// const Card = require('./lib/models/Card.js');

const { majorArcanaCard } = require('./lib/scraper/site.js');

majorArcanaCard()
  .then(data => console.log(data));
