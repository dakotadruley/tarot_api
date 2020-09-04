const { initPage } = require('./parser.js');

// returns an array of marjor arcana card links to scrape
const majorArcana = () => {
  
  return initPage('https://www.tarot-card.net/majorarcana.htm')
    .then(document => {

      return [...document.querySelectorAll('a[href*="/tarot-cards/"]')]
        .map(content => content.getAttribute('href'));
    });
};

// scrape each individual card page for the following information: 
// name, image, meaning, archetype
const majorArcanaCard = () => {

  return initPage('https://www.tarotcardmeanings.net/majorarcana/tarot-fool.htm')
    .then(document => {
      
      return [...document.querySelectorAll('h1').textContent]
        .map(content => content.getAttribute('h1')); 
    });
};

module.exports = { majorArcana, majorArcanaCard }; 

// trying to return innerHTML "the fool" from inside an H1
// I seem to be getting a nodelist returned instead
