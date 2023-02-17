var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello users!');
});


router.get('/details', function(req, res, next) {
  res.send('The site can show some users detail in order to expose some more information');
});


module.exports = router;
