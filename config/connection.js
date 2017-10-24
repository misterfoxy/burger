const mysql = require('mysql');

let connection;

  if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }
  else {
    connection = mysql.createConnection({
      port:3306,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'burgers_db'
    });
  }

connection.connect(function(error){
  if(error){
    throw err;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

module.exports = connection;
