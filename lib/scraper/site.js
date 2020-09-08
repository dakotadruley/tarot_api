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

  return initPage('https://www.tarot-card.net/tarot-cards/fool.htm')
    .then(document => {

      const title = document.querySelector('table tr:first-child td:nth-child(3) center h1').textContent;
      
      const image = document.querySelector('img').textContent;

      // const body = [...document.querySelectorAll('p')]
      //   .map(content => content.textContent.replace(/\r?\n|\r/gm, ''));

      const upright = document.querySelector('div[class*="genericstyle"] p:second-child');

      const reversed = document.querySelector('div[class*="genericstyle"] p:forth-child');

      const correspondences = document.querySelector('div[class*="genericstyle"] p:forth-child');

      return { title, image, upright, reversed, correspondences };
  
    });
};

module.exports = { majorArcana, majorArcanaCard }; 

// data as strings in an array
// how can I grab the image as well? in this same fetch? 
