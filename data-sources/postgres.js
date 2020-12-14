const pg = require('pg');

const { Client } = pg;

class Postgres {
  _client;

  constructor(connectionUrl) {
    this._client = new Client(connectionUrl);
  }

  async connect() {
    await this._client.connect();
  }

  async query(expression, args) {
    const { rows } = await this._client.query(expression, args);
    return rows;
  }
}

module.exports = Postgres;
