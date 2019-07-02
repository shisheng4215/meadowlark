var express = require('express');
var router = express.Router();

var fortune = require('../lib/fortune.js');

var body=require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about',function(req,res){
	//var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune:fortune.getFortune()});
});


router.get('/headers',function(req,res){
	res.set('Content-Type','text/plain');
	var s ='';
	for(var name in req.headers)
		s+=name+':'+req.headers[name]+'\n';
	res.send(s);
});


router.get('/greeting',function(req,res){
	res.render('about',{
		message:'welcome',
		style:req.query.style,
		userid:req.cookie.userid,
		username:req.session.username,
	});
});


router.get('/no-layout',function(req,res){
	res.render('no-layout',{layout:null});
});

router.get('/custom-layout',function(req,res){
	res.render('custom-layout',{layout:'custom'});
});


router.get('/test',function(req,res){
	res.type('text/plain');
	res.send('this is a test');
});


router.post('/process-contact',function(req,res){
	console.log('Received contact from '+req.body.name+'<' + req.body.email+'>');
	//保存到数据库.....
	res.redirect(303,'/thank-you');
});

router.get('/api/tours',function(req,res){
	var tours=[
	{id:0,name:'Hood River',price:9.99},
	{id:1,name:'Oregon Coast',price:149.95}
	];
	res.json(tours);
});

module.exports = router;
