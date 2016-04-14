var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { });
});

router.get('/home', function(req, res, next) {
	res.render('home', { });
});

router.get('/pdf', function(req, res, next) {
	res.render('pdf', { });
});

module.exports = router;
