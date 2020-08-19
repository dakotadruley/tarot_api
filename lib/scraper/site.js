const { initPage } = require('./parser.js');

// returns an array of marjor arcana card links to scrape
const majorArcana = () => {
  
  return initPage('https://www.tarotcardmeanings.net/tarotcards.htm')
    .then(document => {

      return [...document.querySelectorAll('a[href*="/majorarcana/tarot-"]')]
        .map(content => content.getAttribute('href'));
    });
};

// scrape each individual card page for the following information: 
// name, image, meaning, archetype
const majorArcanaCard = () => {

  return initPage('https://www.tarotcardmeanings.net/majorarcana/tarot-fool.htm')
    .then(document => {
      
      return [...document.querySelectorAll('center h1')]
        .map(content => content.getAttribute('h1')); 
    });
};

module.exports = { majorArcana, majorArcanaCard }; 

