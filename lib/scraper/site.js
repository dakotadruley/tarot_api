const { initPage } = require('./parser.js');

const tarotPage = () => {
  
  return initPage('https://www.tarotcardmeanings.net/tarotcards.htm')
    .then(document => {
      // console.log(document.innerHTML);
      return document.querySelectorAll('a[href*="/majorarcana/tarot-"]')
        .map(content => content.getAttribute('href'));
    });
};

module.exports = { tarotPage }; 
