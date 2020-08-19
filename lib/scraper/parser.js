const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const initPage = (url) => {
  return fetch(url)
    .then(res => res.text())
    .then(text => new JSDOM(text))
    .then(dom => dom.window.document);
};

module.exports = { initPage };
