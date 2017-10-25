// import custom ORM
const orm = require('../config/orm.js');

// initialize model for MVC
const burger = {
  // assign selectAll function, passing callback
  selectAll: (cb) => {
    // pass 'burgers' table and HTTP RESPONSE as parameters
    orm.selectAll('burgers', (res) =>{
      cb(res);
    });
  },

  insertOne: (cols, vals, cb) => {
    orm.insertOne('burgers', cols, vals, (res) =>{
      cb(res);
    });
  },

  updateOne: (objColVals, condition, cb) =>{
    orm.updateOne('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  }
}

module.exports = burger;
