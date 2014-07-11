var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {
		'title': 'Ferret'
	});
});

/* GET about page. */
router.get('/about', function(req, res) {
	res.render('about', {
		'title': 'About Ferret'
	});
});

/* GET login page. */
router.get('/login', function(req, res) {
	res.render('login', {
		'title': 'Login to Ferret'
	});
});

/* GET faq page. */
router.get('/faq', function(req, res) {
	res.render('faq', {
		'title': 'Ferret FAQs'
	});
});

module.exports = router;
