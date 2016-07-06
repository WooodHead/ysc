var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/service.html', function(req, res, next) {
  res.render('service', { title: 'Express' });
});
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;
