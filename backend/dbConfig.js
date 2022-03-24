const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.db_Host,
  user: process.env.db_User,
  password: process.env.db_Pass,
  port: process.env.db_Port,
  database: process.env.db_name
});

global.db = pool;