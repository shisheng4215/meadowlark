var express = require('express');
var router = express.Router();

var fortune = require('../lib/fortune.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about',function(req,res){
	//var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune:fortune.getFortune()});
});



module.exports = router;
