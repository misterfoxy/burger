// import database connection module
const connection = require('./connection.js');

// create global function to print wildcards into queryString
function printQuestions(num){
  // create output array
  let arr = [];
// iterate through argument length
  for(var i =0; i<num; i++){
    // push a question mark for each value in argument length
    arr.push("?");
  }

  //return stringified array with commas added
  // e.g('?,?,?,?')
  return arr.toString();
}

// create global function to turn object into SQL query
function objToSql(ob){
  // create output array
  let arr = [];
  // iterate through each key value pair in object
  for(var key in ob){
    //push key value pair to array in string format
    arr.push(key+"="+ob[key]);
  }
  // return stringified array with commas added (used with ::devoured:: conditional)

  return arr.toString();
}

// initialize ORM module for controller
const orm = {
  // create function to select everything from a table, passing table and callback
  selectAll: (tableInput, cb) => {

    // initialize queryString variable with added tableInput parameter
    let queryString = "SELECT * FROM " + tableInput+";";

    // query the database with string
    connection.query(queryString, (err, result)=>{
      if(err){
        throw err;
      }
      // callback result
      cb(result);
    });
  },
  // initialize function to insert new burger into database, passing table, column, values, and callback
  insertOne: (table, cols, vals, cb) => {
    // initialize queryString for respective function
    let queryString = "INSERT INTO "+ table;

    queryString += " (";
    queryString += cols.toString();
    queryString +=") VALUES (";
    queryString += printQuestions(vals.length);
    queryString +=") ";

    // query the database with string, pass condition as vals
    connection.query(queryString, vals, (err, result) => {
      if(err){
        throw err;
      }
      // callback result
      cb(result);
    });
  },

  // initialie function to update burger truthy condition
  updateOne: (table, objColVals, condition, cb) => {
    // initialize queryString for respective function
    let queryString = "UPDATE " + table;

    queryString+= " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    // query the database to update burger with new condition
    connection.query(queryString, (err, result) => {
      if(err){
        throw err;
      }
      // callback result
      cb(result);
    });
  }
}

//export object regional mapper
module.exports = orm;
