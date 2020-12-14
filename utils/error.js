function sendClientError(res) {
  res.statusCode = 400;
  res.json({ message: 'invalid request' });
}

function sendServerError(res, message) {
  res.statusCode = 500;
  res.json({ message });
}

function sendUnauthorized(res) {
  res.statusCode = 401;
  res.json({ message: 'unauthorized' });
}

module.exports = {
  sendClientError,
  sendServerError,
  sendUnauthorized
};
