var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/list', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/detail', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;