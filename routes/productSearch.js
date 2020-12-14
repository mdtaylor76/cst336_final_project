const fetch = require('node-fetch');
const config = require('config');
const { sendClientError, sendServerError } = require('../utils/error');

const { productSearch: { queryUrl } } = config;

function initProductSearch(app) {
  app.get('/grocery/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
      sendClientError(res);
    }

    const url = queryUrl + query;
    try {
      const response = await fetch(url, { method: 'GET' });
      const json = await response.json();

      console.log(json);
      res.json(json);
    }
    catch (error) {
      console.error(error);
      sendServerError(res);
    }
  });
}

module.exports = initProductSearch;
