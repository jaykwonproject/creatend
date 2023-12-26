const mysql = require('mysql2/promise');
const dbConfig = require('../../config/db');

const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function connect() {
  return await pool.getConnection();
}

module.exports = { connect };
