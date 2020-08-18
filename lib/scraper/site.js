const { initPage } = require('./parser.js');

const tarotPage = () => {
  
  return initPage('https://www.tarotcardmeanings.net/tarotcards.htm')
    .then(document => {

      return document.querySelectorAll('center a herf')
        .map(content => content.structuredText);
    });
};

module.exports = { tarotPage }; 
