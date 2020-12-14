const { jwt: jwtConfig } = require('config');
const jwt = require('jsonwebtoken');

const { privateKey, publicKey } = jwtConfig;

function generateJwt(customer) {
  return jwt.sign(customer, privateKey, { algorithm: 'RS256' });
}

async function verifyJwt(jwtToken, customerController) {
  try {
    const { id } = await jwt.verify(jwtToken, publicKey);
    const customer = await customerController.getCustomerById(id);
    return !!customer.id;
  }
  catch (error) {
    console.error({ jwtToken, error }, 'error getting jwt token');
    return false;
  }
}

async function parseJwt(jwtToken) {
  return jwt.verify(jwtToken, publicKey);
}

module.exports = {
  generateJwt,
  verifyJwt,
  parseJwt
};
