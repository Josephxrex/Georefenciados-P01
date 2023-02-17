var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Campus Site & Map' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.send("This page will discribe the page about us");
});

/* GET home page. */
router.get('/gotousers', function(req, res, next) {
  res.redirect("List of users!");
});

router.get('/gmap', function(req, res, next) {
  res.render('gmap', { title: 'Google Maps' });
});

module.exports = router;
