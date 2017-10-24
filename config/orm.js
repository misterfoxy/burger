const connection = require('./connection.js');

function printQuestions(num) =>{
  let arr = [];

  for(var i =0; i<num; i++){
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob){
  let arr = [];

  for(var key in ob){
    arr.push(key+"="+ob[key]);
  }

  return arr.toString();
}

const orm = {

  selectAll: (tableInput, cb) => {
    let queryString = "SELECT * FROM " + tableInput+";";

    connection.query(queryString, (err, result)=>{
      if(err){
        throw err;
      }
      cb(result);
    });
  },

  insertOne: (table, cols, vals, cb) => {
    let queryString = "INSERT INTO "+ table;

    queryString += " (";
    queryString += cols.toString();
    queryString +=") VALUES (";
    queryString += printQuestions(vals.length);
    queryString +=") ";

    connection.query(queryString, vals, (err, result) => {
      if(err){
        throw err;
      }

      cb(result);
    });
  },

  updateOne: (table, objColVals, condition, cb) => {
    let queryString = "UPDATE " + table;

    queryString+= " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if(err){
        throw err;
      }

      cb(result);
    });
  }
}

module.exports = orm;
