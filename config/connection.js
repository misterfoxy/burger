// import dependency allowing for database connection
const mysql = require('mysql');

//initialize connection variable, run conditional for which connection to use
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

// connect to database, display threadID in console
connection.connect((error) => {
  if(error){
    throw error;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

//export connection module
module.exports = connection;
