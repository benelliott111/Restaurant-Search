const db = require( './connection' )('dreamkitchen_db','danielsedin11')
let search = document.getElementById('searchValue').value
const restaurantLimit = document.getElementById('restaurantCheck').value
const restaurantValue = document.getElementById('restaurantChoice').value

const dishLimit = document.getElementById('dishCheck').value
const dishValue = document.getElementById('dishChoice').value


function insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image){
    const updateQuery = `INSERT INTO newrecipe (Title, Recipe_Desc, Recipe_link, Image) VALUES ('${Title}', '${Recipe_Desc}', '${Recipe_link}', '${Image}');`
    console.log("updateQuery" + updateQuery)
    // Run MySQL Query
   return db.query(updateQuery);
  }

function searchResults(search){
    if (restaurantLimit === true){
      const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE Restaurant_Name = ${restaurantValue} AND concat(Dish_Name, Dish_Description) LIKE '%${search}%`)
    } else if (dishLimit === true){
      const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE Dish_Name = ${dishValue} AND concat(Dish_Name, Dish_Description) LIKE '%${search}%`)
    } else if (restaurantLimit === true && dishLimit === true){
      const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE  Restaurant_Name = ${restaurantValue} AND Dish_Name =${dishValue} AND concat(Dish_Name, Dish_Description) LIKE '%${search}%`)
    } else {
    const searchQuery = db.query(`SELECT * FROM dreamkitchen5 WHERE concat(Dish_Name, Dish_Description) LIKE '%${search}%`)
    }
  }

  module.exports = {insertNewRecipe, searchResults}