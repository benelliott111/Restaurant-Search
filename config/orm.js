const db = require( './connection' )('dreamKitchen','shivamysql1364')

var orm = {
    // selectAll()
    selectAll: function(callback) {
      // Run MySQL Query
      db.query('SELECT * FROM dreamkitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },

    selectType: function(callback) {
      // Run MySQL Query
      db.query('SELECT DISTINCT Category FROM  dreamkitchen5', function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },

    selectItemByType: function(type, callback){
      const updateQuery = `SELECT * FROM dreamkitchen5 where type = ${type}`
      // Run MySQL Query
      db.query(updateQuery , function (err, result) {
          if (err) throw err;
          callback(result);
        });
  
    }
  };

  
  
  // Export the ORM object in module.exports.
  module.exports = orm;