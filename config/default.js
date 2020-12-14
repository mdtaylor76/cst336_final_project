const GOOGLE_CLOUD_KEY = process.env.GOOGLE_CLOUD_KEY;
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

module.exports = {
  postgresUrl: process.env.POSTGRES_URL || '',
  jwt: {
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
  },
  googlePlaces: {
    getGroceryUrl: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=3000&type=grocery&key=${GOOGLE_CLOUD_KEY}&keyword=grocery`,
    getPhotoUrl: `https://maps.googleapis.com/maps/api/place/photo?key=${GOOGLE_CLOUD_KEY}&maxwidth=600&photoreference=`,
    mapsUrl: `https://www.google.com/maps/place/?q=place_id:`
  },
  productSearch: {
    queryUrl: `https://api.spoonacular.com/food/products/search?number=6&apiKey=${SPOONACULAR_API_KEY}&query=`
  },
  mySql: {
    host: 'ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'atl9gh0n9ibhuu5p',
    password: 'csbxzy852g3cvkyn',
    database: 'f51qdfp6h2j59rfu'
  }
};
