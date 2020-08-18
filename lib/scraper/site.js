const { initPage } = require('./parser.js');

const tarotPage = () => {
  
  return initPage('https://www.tarotcardmeanings.net/tarotcards.htm')
    .then(document => {

      return document.querySelectorAll('center a')
        .map(content => content.text);
    });
};

module.exports = { tarotPage }; 
