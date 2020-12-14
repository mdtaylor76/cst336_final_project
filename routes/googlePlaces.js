const fetch = require('node-fetch');
const config = require('config');
const { sendClientError, sendServerError } = require('../utils/error');

const { googlePlaces: { getGroceryUrl, getPhotoUrl, mapsUrl } } = config;

const headers = {
  'Content-Type': 'application/json'
};

function initGooglePlaces(app) {
  app.get('/grocery/nearby/:lat/:long', async (req, res) => {
    const { lat, long } = req.params;

    if (!lat || !long) {
      sendClientError(res);
      return;
    }

    const url = getGroceryUrl + `&location=${lat},${long}`;
    try {
      const response = await fetch(url, { method: 'POST', headers });
      const json = await response.json();
      const mappedResults = json.results.map((location) => {
        location.mapsUrl = generateMapsLink(location.place_id);
        return location;
      });

      console.log(mappedResults);
      res.json(mappedResults);
    }
    catch (error) {
      console.error(error);
      sendServerError(res, 'Google Places error');
    }
  });

  app.get('/grocery/photo/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
      sendClientError(res);
      return;
    }

    try {
      const url = getPhotoUrl + id;
      const { url: photoUrl } = await fetch(url);

      console.log(photoUrl);
      res.json({ url: photoUrl });
    }
    catch (error) {
      console.error(error);
      sendServerError(res, 'Google Places error');
    }
  });
}

function generateMapsLink(placeId) {
  return mapsUrl + placeId;
}

module.exports = initGooglePlaces;
