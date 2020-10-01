require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const { Card } = require('./lib/models/Card.js');

app.use(cors());

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
