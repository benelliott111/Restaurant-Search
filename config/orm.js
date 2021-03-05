const db = require( './connection' )('dreamKitchen','shivamysql1364')

var orm = {

  selectNewRecipe: function(callback) {
    // Run MySQL Query
    db.query('SELECT * FROM newrecipe', function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
    // selectAll()
    selectAll: function(callback) {
      // Run MySQL Query
      db.query('SELECT * FROM dreamKitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },

    selectType: function(callback) {
      // Run MySQL Query
      db.query('SELECT DISTINCT Menu_Type FROM  dreamKitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },
    selectRsturantName: function(callback) {
      // Run MySQL Query
      db.query('SELECT DISTINCT Restaurant_Name FROM  dreamKitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },
    selectPrice: function(callback) {
      // Run MySQL Query
      db.query('SELECT DISTINCT Price_Profile FROM  dreamKitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },

    selectItemByType: function(type, callback){
      const updateQuery = `SELECT * FROM dreamKitchen5 where type = ${type}`
      // Run MySQL Query
      db.query(updateQuery , function (err, result) {
          if (err) throw err;
          callback(result);
        });
    }

  };

  
  // Export the ORM object in module.exports.
  module.exports = orm
  //module.exports = insertNewRecipe