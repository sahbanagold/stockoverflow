var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/stocks', function(req, res, next) {
  res.render('stocks', { title: 'Express' });
});
router.get('/update', function(req, res, next) {
  res.render('update', { title: 'Express' });
});
router.get('/insert', function(req, res, next) {
  res.render('insert', { title: 'Express' });
});
module.exports = router;
