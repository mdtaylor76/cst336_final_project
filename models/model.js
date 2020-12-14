const { postgres } = require('../data-sources/connections');
const generateId = require('../utils/generateId');

/**
 * base model class
 */
class Model {
  type;
  static _postgres = postgres;

  /**
   *
   * @param {string} type
   */
  constructor(type) {
    this.type = type;
  }

  static get postgres() {
    return this._postgres;
  }

  generateId() {
    return generateId(this.type);
  }
}

module.exports = Model;
