var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Search=mongoose.model('Search');
var mytime=require('./../public/javascripts/log.js')

router.post('/', function(req, res, next) {
  // var time=new Date();
  var search = new Search({
    title:req.body.title,
    des:req.body.des,
    begindate:'',
    resdate:req.body.resdate,
    bettingends:req.body.bettingends,
    betweightendpoint:req.body.betweightendpoint,
    category:req.body.category,
    creaddr:req.body.creaddr,
    cretime:mytime.getFullTime(),
    isok:'0',
    currentstatus:'0',
    totalbet:'0',
    totalyesbet:'0',
    totalnobet:'0',
    yesbetnum:'0',
    nobetnum:'0',
    totalbetnum:'0'

  });
  search.save(function(err){
    if (err) {
      res.end('ERROR');
      return next();
    }
  })
  res.json("OK")
})
module.exports = router;
