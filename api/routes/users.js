var express = require('express');
var router = express.Router();


var mongoose=require('mongoose');
var User=mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*
  编写加入数据库的代码
  创建路由
*/


router.get('/test',function(req,res,next){
  //创建一个user实例
  var user = new User({
    uid : 1,
    username : 'hhl'
  })
  //存储数据
  user.save(function(err){
    if (err) {
      res.end('ERROR');
      return next();
    }
    User.find({},function(err,docs){
      if(err){
        res.end('REEOR');
        return next();
      }
      res.json(docs)
    })


  })




})


module.exports = router;
