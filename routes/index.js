var express = require('express');
var router = express.Router();
const foods = require('../models/product');
const orm2 = require( '../config/orm2' );
const orm = require('../config/orm');
/* GET home page. */
router.get('/recipe', function(req, res, next) {
  res.render('recipe/Recipe');
});

router.get('/', function(req, res, next) {
  var Type
  var Price
  var Name
  foods.selectType((type)=>{
    Type = type
    console.log(type)
  })
  foods.selectPrice((price)=>{
    Price = price
    console.log(price)
  })
  foods.selectRsturantName((name)=>{
    Name = name
    console.log(Name)
  })
  foods.selectAll((data)=>{
    res.render('food/index', { data: data , type:Type , price:Price, Name:Name});
  })
  
});
let results
router.post('/search',async (req, res, next) =>{
   const search = req.body.searchValue
   console.log(search)

  results = await orm2.searchResults(search)
  res.render('food/index',{data:results});

})



router.get('/newRecipe', function(req, res, next) {
  foods.selectNewRecipe((data)=>{
    res.render('recipe/newRecipe', { data: data});
  })
});

router.post('/newRecipe', function(req, res) {
  console.log( '[newRecipe] req.body: ', req.body );
  const Title = req.body.title.trim();
  console.log("title" +Title)
  const Recipe_link = req.body.RecipeLink.trim();
  const Image = req.body.Image.trim();
  const Recipe_Desc = req.body.Description.trim();
  const result = orm2.insertNewRecipe(Title, Recipe_Desc, Recipe_link, Image);
  res.redirect('/newRecipe');
});

module.exports = router;
