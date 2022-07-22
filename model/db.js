const mysql = require('mysql');
const secret = require('../secret.json').place[0];

const connection = mysql.createConnection({
  host: secret.database.host,
  user: secret.database.user,
  password: secret.database.password,
  database: secret.database.name,
  acquireTimeout: secret.database.acquireTimeout,
  connectTimeout: secret.database.acquireTimeout,
  multipleStatements: true,
});

connection.connect( error => {
  if(error) {
    console.lof(error);
  } else {
    console.log('db connected');
  }
});

module.exports = connection;