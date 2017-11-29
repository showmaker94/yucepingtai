var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Search=mongoose.model('Search');
var MyComment=mongoose.model('Comment');
var Bet=mongoose.model('Bet');

/*
**************后台管理合同页面***************
0 按照标题查询进行  确认  的更新
1 按照标题查询进行  状态  的更新


××××××××××××××管理投注页面×××××××××××××××××××
2 按照时间查询进行  确认  的更新
*/

router.get('/', function(req, res, next) {

  n=req.query.type;
  // console.log(n);
  switch (n) {
    case '0':
      var id= req.query.contract_id;
      var sid=mongoose.Types.ObjectId(id)
      Search.findOneAndUpdate({_id:sid},{isok:req.query.isok},function(err,docs){
        if (err) {
          res.json(err)
        }else {
          res.json(docs)
        }

      })
      break;
    case "1":
      var id= req.query.contract_id;
      var sid=mongoose.Types.ObjectId(id)
      Search.findOneAndUpdate({_id:sid},{currentstatus:req.query.currentstatus},function(err,docs){
        if (err) {
          res.json(err)
        }else {
          res.json(docs)
        }

      })
      break;
      case "2":
        Bet.findOneAndUpdate({time:req.query.time},{isok:req.query.isok},function(err,docs){
          if (err) {
            res.json(err)
          }else {
            res.json(docs)
          }

        })
      break;
      case "3":
        Search.findOneAndUpdate({contract_id:req.query.contract_id},{des:req.query.des},function(err,docs){
          if (err) {
            res.json(err)
          }else {
            res.json(docs)
          }

        })
        break;
        //更新开始时间
        case "4":
        var id= req.query.contract_id;
        var sid=mongoose.Types.ObjectId(id)
          Search.findOneAndUpdate({_id:sid},{begindate:req.query.begindate},function(err,docs){
            if (err) {
              res.json(err)
            }else {
              res.json(docs)
            }

          })
          break;
    default:

  }
});

module.exports = router;
