var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Search=mongoose.model('Search');
var MyComment=mongoose.model('Comment');
var Bet=mongoose.model('Bet');
/*
×××××××××××××××××search model×××××××××××××××××××××
0 按标题进行搜索
1 按照创建时间进行排序，显示前4个
2 已经解决的合约 按解决时间进行排序，显示前4个
3 即将关闭的合约 按照解决时间进行排序， 显示前4个
4 已经关闭的合约 按照解决时间进行排序，显示前4个
5 显示全部合同  按照创建时间进行排序
7 模糊查询  标题 和 地址
8 按照时间 显示最新评论信息
9 查询最热合同 按照押注的总数进行排序

×××××××××××××××××××comment model××××××××××××××××××

6 返回评论

×××××××××××××××××××××bet model××××××××××××××××××××××××

10 按照时间去查找最新押注信息
11 按照标题查找押注信息

×××××××××××××××××××××× 后台管理部分×××××××××××××××××××××××××
13 按照创建时间显示合同
14 按标题显示全部押注信息
*/

router.get('/', function(req, res, next) {
  n=req.query.type;
  // console.log(n);
  // console.log(req.query.title);
  switch (n) {
    //按标题进行查找
    case '0':
        var id= req.query.contract_id;
        // var sid=ObjectId(id);
        var sid=mongoose.Types.ObjectId(id)
        // console.log(sid);
        Search.find({"isok":'1',"_id":sid},function(err,docs){
          if(err){
            res.end('REEOR');
            return next();
          }
          res.json(docs)
        });
    break;
      //按照创建时间进行排序，并且显示前4个
    case '1':
        Search.find({'isok':'1','currentstatus':'0'}).sort({'cretime':-1}).limit(4).exec(function (err, docs) {
            res.json(docs);
    });
      break;
      //按照已经解决的进行搜索，按照最新解决时间进行排序
    case '2':
        Search.find({'isok':'1','currentstatus':"3"}).sort({'resdate':-1}).limit(4).exec(function (err, docs) {
        res.json(docs);
        });
      break;
      //即将关闭的合同 ，
    case '3':
          Search.find({'isok':'1','currentstatus':'1'}).sort({'resdate':-1}).limit(4).exec(function (err, docs) {
          res.json(docs);
        });
        break;
        //已经关闭的合同
    case '4':
          Search.find({'isok':'1','currentstatus':'2'}).sort({'resdate':-1}).limit(4).exec(function (err, docs) {
          res.json(docs);
        });
        break;
        //查询全部合同
    case '5':
          Search.find({'isok':'1'}).sort({'cretime':-1}).exec(function (err, docs) {
          res.json(docs);
        });
        break;
    case '6':
          var id= req.query.contract_id;
          MyComment.find({'contract_id':id}).sort({'time':-1}).exec(function (err, docs) {
          res.json(docs);
        });
        break;
    case '7':
          var titleoption={};
          if(req.query.title!=''){
              var re = new RegExp(req.query.title,'i');
              titleoption.title={$regex : re};
          }

          var findoption={'isok':'1'};
          var sortoption={};
          if(req.query.category!="类型" && req.query.category!="全部"){
            findoption.category=req.query.category;
          }
          if(req.query.status!="状态" && req.query.status!="全部"){
            if(req.query.status=='新合约'){
              findoption.currentstatus='0';
            }
            if(req.query.status=='即将关闭的合约'){
              findoption.currentstatus='1';
            }
            if(req.query.status=='关闭的合约'){
              findoption.currentstatus='2';
            }
            if(req.query.status=='解决的合约'){
              findoption.currentstatus='3';
            }
          }
          if(req.query.order!="排序"){
            if (req.query.order=='生成日期') {
            sortoption.begindate="-1";
            }
            if (req.query.order=='押注多少') {
              sortoption.totalbet='-1';
            }
            if (req.query.order=='解决日期') {
              sortoption.resdate='-1';
            }
          }
          // Search.find(findoption).or([{'title':{$regex : re}}]).sort(sortoption).exec(function (err, docs) {
          Search.find(findoption).or([titleoption]).sort(sortoption).exec(function (err, docs) {
              res.json(docs);
              });
        break;
        case '8':
              MyComment.find({'isok':'1'}).sort({'time':-1}).exec(function (err, docs) {
              res.json(docs);
            });
          break;
        case '9':
              Search.find({'isok':'1'}).sort({'totalbetnum':-1}).exec(function (err, docs) {
              res.json(docs);
            });
            break;
        case '10':
              Bet.find({'isok':'1'}).sort({'time':-1}).exec(function (err, docs) {
              res.json(docs);
                });
            break;
        case '11':
              var id= req.query.contract_id;
              var sid=mongoose.Types.ObjectId(id)
              Bet.find({'isok':'1','contract_id':sid}).sort({'time':-1}).exec(function (err, docs) {
              res.json(docs);
                });
            break;
        case '12':
              var re = new RegExp(req.query.title,'i');
              Search.find({'isok':'1',}).or([{'title':{$regex : re}}]).sort({'cretime':-1}).exec(function (err, docs) {
              res.json(docs);
              });
          break;
          //后台管理显示所有创建的合同
        case "13":
              Search.find({}).sort({'cretime':-1}).exec(function (err, docs) {
              res.json(docs);
        });

          break;
        case "14":
              Bet.find({'contract_id':req.query.contract_id}).sort({'cretime':-1}).exec(function (err, docs) {
              res.json(docs);
        });
        break;
    default:

  }





});

module.exports = router;
