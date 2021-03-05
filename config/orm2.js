const db = require( './connection' )('fi05jgc2tuzs15tz','f9c0u9nyoxegodmd')




function insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image){
    const updateQuery = `INSERT INTO newrecipe (Dish_Name, Dish_Description, Make_it_at_Home, Img_Link) VALUES ('${Title}', '${Recipe_Desc}', '${Recipe_link}', '${Image}');`
    console.log("updateQuery" + updateQuery)
    // Run MySQL Query
   return db.query(updateQuery);
  }

async function searchResults(search){

//   if (dishLimit === false && restaurantLimit === true){
//     const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE Restaurant_Name = ${restaurantValue} AND concat(Dish_Name, Dish_Description) LIKE '%${search}%`)
//       console.log(search, restaurantLimit, restaurantValue)

//   } else if (dishLimit === true && restaurantLimit === false){
//     const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE Dish_Name = ${dishValue} AND concat(Dish_Name, Dish_Description) LIKE '%${search}%`)
//       console.log(search, dishLimit, dishValue)

//   } else if (dishLimit === true && restaurantLimit === true){
//     const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE  Restaurant_Name = ${restaurantValue} AND Dish_Name =${dishValue} AND concat(Dish_Name, Dish_Description) LIKE '%${search}%`)
//       console.log(search, restaurantLimit, restaurantValue, dishLimit, dishValue)

//   } else {
    const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE Dish_Name LIKE '%${search}%';`)
      console.log(search)
      return searchQuery

//   }
}
  module.exports = {insertNewRecipe, searchResults}