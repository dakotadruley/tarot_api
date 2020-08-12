require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const models = require('./seed.js');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/card', async(req, res) => {
  const card = await models.cards;
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
