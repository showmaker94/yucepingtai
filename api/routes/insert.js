var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Search=mongoose.model('Search');
var Bet=mongoose.model('Bet');
var MyComment=mongoose.model('Comment');
var mytime=require('./../public/javascripts/log.js');
//
/*
0 插入 押注信息

*/
//
router.get('/', function(req, res, next) {

  var bet = new Bet({
    contract_id:req.query.contract_id,
    time:mytime.getFullTime(),
    bet:req.query.yesorno,
    inaddr:"162DNZLpLKTj6n2UyucPzDMEMJR28NPV1X",
    innum:0.001,
    outaddr:req.query.outaddr,
    outnum:.0013,
    weight:99000,
    isok:'0'
  });

  bet.save(function (err, res) {

      if (err) {
          console.log("Error:" + err);
      }
      else {
          console.log("Res:" + res);
      }

  });
  });
router.get('/comment',function(req,res,next){
  var mycomment = new MyComment({
    contract_id:req.query.contract_id,
    time:mytime.getFullTime(),
    name:req.query.postmen,
    comment:req.query.postcontent
  });

  mycomment.save(function (err, res) {

      if (err) {
          console.log("Error:" + err);
      }
      else {
          console.log("Res:" + res);
      }

  });
  // console.log(req.body.title);
  // Search.update({"title" : req.body.title},
  // {'$push':{ comment : { name: req.body.postmen, content: req.body.postcontent,time:Date()}}}, function(err, data){
  //     if(err) {
  //         console.log(err);}
  //     console.log(data);
  //     });
})

module.exports = router;
