var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
var data=fs.readFileSync('public/1.txt','utf-8');
var a=data.toString().slice(-1);
router.get('/',function(req,res,next){
  var a2=a++;
  fs.writeFileSync('public/1.txt','页面刷新：'+a2);
  res.send('页面刷新：'+a2)
});
router.get('liu', function(req, res, next) {
  res.render('liu', { title: 'Express' });
});

module.exports = router;