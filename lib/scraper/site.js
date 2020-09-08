const { initPage } = require('./parser.js');

// returns an array of marjor arcana card links to scrape
const majorArcana = () => {
  
  return initPage('https://www.tarot-card.net/majorarcana.htm')
    .then(document => {

      return [...document.querySelectorAll('a[href*="/tarot-cards/"]')]
        .map(content => content.getAttribute('href'));
    });
};

const majorArcanaCard = (url) => {

  return initPage(url)
    .then(document => {

      const title = document.querySelector('table tr:first-child td:nth-child(3) center h1').textContent.trim();
      
      const image = document.querySelector('img').getAttribute('src').trim();

      // const body = [...document.querySelectorAll('p')]
      //   .map(content => content.textContent.replace(/\r?\n|\r/gm, ''));

      const upright = document.querySelector('.genericstyle p:nth-child(2)').textContent.trim();

      const reversed = document.querySelector('.genericstyle p:nth-child(4)').textContent.trim();

      const [Element, Zodiac] = document.querySelector('.genericstyle p:nth-child(6)').textContent.trim().split('\n\n');

      return { title, image, upright, reversed, correspondences: { Element, Zodiac } };
  
    });
};

module.exports = { majorArcana, majorArcanaCard }; 

// 
