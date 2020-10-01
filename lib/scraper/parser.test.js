const { initPage } = require('./parser.js');
// const { document } = require('jsdom');

describe('scraper function', () => {
  it('makes a request and returns information', async() => {
    const url = 'https://www.tarot-card.net/majorarcana.htm';
    const dom = await initPage(url);

    expect(dom).toEqual(dom.window.document);
  });
});
