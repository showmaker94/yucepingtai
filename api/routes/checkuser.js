var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var User=mongoose.model('User');

router.post('/', function(req, res, next) {
  User.findOne({'username':req.body.username},function(err,docs){
    if(err){
      res.end('REEOR');
      return next();
    }
    else if(docs==null){
      res.json("-1");
      return;
    }
    else if(docs.password!=req.body.password){
    res.json("0");
    return;
    }
    else {
    res.json("OK");
    }
  });
});

module.exports = router;
