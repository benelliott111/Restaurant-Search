const db = require( './connection' )('dreamkitchen_db','danielsedin11')




function insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image){
    const updateQuery = `INSERT INTO newrecipe (Title, Recipe_Desc, Recipe_link, Image) VALUES ('${Title}', '${Recipe_Desc}', '${Recipe_link}', '${Image}');`
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