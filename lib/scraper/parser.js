const fetch = require('node-fetch');
const html = require('node-html-parser');

const initPage = (url) => {
  return fetch(url)
    .then(res => res.text())
    .then(text => html.parse(text.toLowerCase()));
};

module.exports = { initPage };
