const mysql = require('mysql');
const { mySql: { host, user, password, database } } = require('config');

const pool = mysql.createPool({
  connectionLimit: 10,
  host,
  user,
  password,
  database,
});

module.exports = pool;
