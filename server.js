require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { Card } = require('./lib/models/Card.js');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/card', async(req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
