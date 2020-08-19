const { initPage } = require('./parser.js');

const majorArcana = () => {
  
  return initPage('https://www.tarotcardmeanings.net/tarotcards.htm')
    .then(document => {
      // console.log(document.innerHTML);
      return [...document.querySelectorAll('a[href*="/majorarcana/tarot-"]')]
        .map(content => content.getAttribute('href'));
    });
};

const majorArcanaCard = (path) => {

  return initPage(`https://www.tarotcardmeanings.net${path}`)
    .then(document => {
      return; 
    });
};

module.exports = { majorArcana, majorArcanaCard }; 

