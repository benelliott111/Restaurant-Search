var express = require('express');
var router = express.Router();
const foods = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  var Type
  foods.selectType((type)=>{
    Type = type
    console.log(type)
  })
  foods.selectAll((data)=>{
    console.log(data)
    res.render('food/index', { data: data , type:Type });
  })
  
});

module.exports = router;
