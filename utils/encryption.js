const bcrypt = require('bcrypt');
const saltRounds = 10;

async function encrypt(password) {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
}

function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = {
  encrypt,
  comparePasswords
};
