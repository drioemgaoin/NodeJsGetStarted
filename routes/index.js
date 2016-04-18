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

	var data = {
		name: "Romain",
		surname: "Diegoni",
		email: "romain_diegoni@hotmail.com"
	};

	var render = require('../utils/render.js')
	render(template, data, function(rendered) {
		generator.generate(rendered, pdf, function(){
			res.download(pdf, 'file:///' + pdf, function() {
				fs.unlinkSync(pdf);
			});
		});
	});
});

module.exports = router;
