const { v4 } = require('uuid');

/**
 *
 * @param {string} type
 */
function generateId(type) {
  return `${type}_${v4()}`;
}

module.exports = generateId;
