var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('username','三千翔');
  res.render('index', { title: 'Express' });
});

router.get('/test',function(req, res, next){
  console.log(req.cookies);
});

module.exports = router;
