require('dotenv').config();
// const Card = require('./lib/models/Card.js');

const { majorArcana } = require('./lib/scraper/site.js');

majorArcana()
  .then(data => console.log(data));
