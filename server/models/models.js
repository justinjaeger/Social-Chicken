const { Pool } = require('pg');

const PG_URI =
  'postgres://muboapmu:M1mUo_bqoI5reDB9LpHz382VsLCSSF06@raja.db.elephantsql.com:5432/muboapmu';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
