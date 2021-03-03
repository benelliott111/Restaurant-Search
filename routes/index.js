var express = require('express');
var router = express.Router();
const foods = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  var Type
  var Price
  foods.selectType((type)=>{
    Type = type
    console.log(type)
  })
  foods.selectPrice((price)=>{
    Price = price
    console.log(price)
  })
  foods.selectAll((data)=>{
    res.render('food/index', { data: data , type:Type , price:Price });
  })
  
});

module.exports = router;
