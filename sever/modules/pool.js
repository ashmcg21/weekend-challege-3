const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
  database: 'todo_list',
  host: 'local host',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
  console.log('Postgres Connected.');
});

pool.on('error', () => {
  console.log('Postgres Not Connected!!');
});

module.exports = pool;
