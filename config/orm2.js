const db = require( './connection' )('dreamKitchen','shivamysql1364')

function insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image){
    const updateQuery = `INSERT INTO newrecipe (Title, Recipe_Desc, Recipe_link, Image) VALUES ('${Title}', '${Recipe_Desc}', '${Recipe_link}', '${Image}');`
    console.log("updateQuery" + updateQuery)
    // Run MySQL Query
   return db.query(updateQuery);
  }

  module.exports = {insertNewRecipe}