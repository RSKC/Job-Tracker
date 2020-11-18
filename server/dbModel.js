const { Pool } = require('pg');

const dbInfo = {
  user: 'postgres',
  host: 'localhost',
  database: 'jobdb',
  password: 'leeced',
  port: 5432
}

const pool = new Pool(dbInfo);

module.exports = {
  query: (text, params, callback) => {
    console.log(`Executed this query: ${text}`);
    return pool.query(text, params, callback);
  }
}