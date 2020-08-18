require('dotenv').config();
// const Card = require('./lib/models/Card.js');

const { tarotPage } = require('./lib/scraper/site.js');

tarotPage()
  .then(data => console.log(data));
