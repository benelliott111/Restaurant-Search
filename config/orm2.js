const db = require( './connection' )('fi05jgc2tuzs15tz','f9c0u9nyoxegodmd')




function insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image){
    const updateQuery = `INSERT INTO newrecipe (Dish_Name, Dish_Description, Make_it_at_Home, Img_Link) VALUES ('${Title}', '${Recipe_Desc}', '${Recipe_link}', '${Image}');`
    console.log("updateQuery" + updateQuery)
    // Run MySQL Query
   return db.query(updateQuery);
  }


  module.exports = {insertNewRecipe}