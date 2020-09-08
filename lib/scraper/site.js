const { initPage } = require('./parser.js');

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

      const upright = document.querySelector('.genericstyle p:nth-child(2)').textContent.trim();

      const reversed = document.querySelector('.genericstyle p:nth-child(4)').textContent.trim();

      const [Element, Zodiac] = document.querySelector('.genericstyle p:nth-child(6)').textContent.trim().split('\n\n');

      return { title, image, upright, reversed, correspondences: { Element, Zodiac } };
  
    });
};

const minorArcana = () => {
  
  return initPage('https://www.tarot-card.net/minorarcana.htm')
    .then(document => {

      return [...document.querySelectorAll('a[href*="/tarot-cards/"]')]
        .map(content => content.getAttribute('href'));
    });
};

const minorArcanaCard = (url) => {

  return initPage(url)
    .then(document => {

      const title = document.querySelector('table tr:first-child td:nth-child(3) center h1').textContent.trim();
      
      const image = document.querySelector('img').getAttribute('src').trim();

      const upright = document.querySelector('.genericstyle p:nth-child(2)').textContent.trim();

      const reversed = document.querySelector('.genericstyle p:nth-child(4)').textContent.trim();

      const [Element, Number] = document.querySelector('.genericstyle p:nth-child(6)').textContent.trim().split('\n\n');

      return { title, image, upright, reversed, correspondences: { Element, Number } };
  
    });
};


module.exports = { majorArcana, majorArcanaCard, minorArcana, minorArcanaCard }; 

