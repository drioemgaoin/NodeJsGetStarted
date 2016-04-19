var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { });
});

router.get('/home', function(req, res, next) {
	res.render('home', { });
});

router.get('/pdf', function(req, res, next) {
	var generator = require('../utils/generator-pdf');

	var fs = require('fs');
	var path = require('path');
	var template = path.join(__dirname, '../pdf/templates/report.hbs');
	var pdf = path.join(__dirname, '../pdf/tmp/report.pdf');

	var context = {
	  author: {firstName: "Romain", lastName: "Diegoni"},
	  body: "Report example",
	  comments: [{
	    author: {firstName: "John", lastName: "Doe"},
	    body: "Me too!"
	  },
		{
			author: {firstName: "John", lastName: "Doe2"},
			body: "Me not at all!"
		}]
	};

	var render = require('../utils/render.js')
	render(template, context, function(rendered) {
		generator.generate(rendered, pdf, function(){
			res.download(pdf, 'file:///' + pdf, function() {
				fs.unlinkSync(pdf);
			});
		});
	});
});

module.exports = router;
