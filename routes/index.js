var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexr', { title: 'Express' });
});

router.get('/write',function(req, res, next){
  res.render('indexw', { title: 'Express' });
});

module.exports = router;
