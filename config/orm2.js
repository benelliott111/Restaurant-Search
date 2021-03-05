const db = require( './connection' )('dreamKitchen','shivamysql1364')

function insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image){
    const updateQuery = `INSERT INTO newrecipe (Dish_Name, Dish_Description, Make_it_at_Home, Img_Link) VALUES ('${Title}', '${Recipe_Desc}', '${Recipe_link}', '${Image}');`
    console.log("updateQuery" + updateQuery)
    // Run MySQL Query
   return db.query(updateQuery);
  }

  module.exports = {insertNewRecipe}