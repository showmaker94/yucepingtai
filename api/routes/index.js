var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(new Date()-new Date('2017-12-30'));
  res.render('index', { title: 'Express' });
});

module.exports = router;
