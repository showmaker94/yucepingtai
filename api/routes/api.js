var express = require('express');
var router = express.Router();
var db=require("../public/javascripts/db")
var mytime=require('./../public/javascripts/log.js');
var coinapi=require('./bitgogogo.js');
var ipaddr = require('ipaddr.js');
// var getip=require("../public/javascripts/ip")
// var ip = req.headers['x-forwarded-for'] ||
//     req.ip ||
//     req.connection.remoteAddress ||
//     req.socket.remoteAddress ||
//     req.connection.socket.remoteAddress || '';

// router.get('/ip', function(req, res, next) {
//
  // if(ip.split(',').length>0){
  //     ip = ip.split(',')[0]
  //   }
  //  console.log(ipaddr.process(ip));
 // });
//获取IP

/************************top 开始**************************/
/* browse search*/



router.get('/searchbrowse', function(req, res, next) {
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
  db.searchWord(findoption,titleoption,sortoption)
  .then((ret)=>{
    res.json(ret)
  })
  .catch((err)=>{
    console.log(err);
  })
  // Search.find(findoption).or([titleoption]).sort(sortoption).exec(function (err, docs) {
  //     res.json(docs);
  //     });
});


/* top search input*/
router.get('/searchinput', function(req, res, next) {
  // var re = new RegExp(req.query.title,'i');
  // Search.find({'isok':'1',}).or([{'title':{$regex : re}}]).sort({'cretime':-1}).exec(function (err, docs) {
  // res.json(docs);
  // });
  var re = new RegExp(req.query.title,'i');
  var obj1={'isok':'1',};
  var obj2={'title':{$regex : re}};
  var obj3={'cretime':-1};
    db.topSearchWord(obj1,obj2,obj3)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/************************top 结束***************************/


/**********************首页开始***************************/
/*new*/
router.get('/shownew', function(req, res, next) {
    db.searchContract(req.query.obj1,req.query.obj2)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*closing*/
router.get('/showclosing', function(req, res, next) {
  // console.log(req.query.obj1);
    db.searchContract(req.query.obj1,req.query.obj2)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*resolve*/
router.get('/showresolve', function(req, res, next) {
    db.searchContract(req.query.obj1,req.query.obj2)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*closed*/
router.get('/showclosed', function(req, res, next) {
    db.searchContract(req.query.obj1,req.query.obj2)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*hot*/
router.get('/showhot', function(req, res, next) {
    db.searchContract(req.query.obj1,req.query.obj2)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*latest comment*/
router.get('/showcomment', function(req, res, next) {
    db.searchComment(req.query.obj1,req.query.obj2)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*latest bet*/
router.get('/showbet', function(req, res, next) {
    db.searchBet(req.query.obj1,req.query.obj2)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*************************首页结束****************************/

/***************************new 开始**************************/
router.post('/creContract', function(req, res, next) {
  var title=req.body.title
  var des=req.body.des
  var bet=req.body.bet
  var resdate=req.body.resdate
  var bettingends=req.body.bettingends
  // var betweightendpoint=req.body.betweightendpoint
  var betweightendpoint=''
  var category=req.body.category
  // var creaddr=req.body.creaddr
  var creaddr=''
  var title=req.body.title
  var cretime=mytime.getFullTime();
  db.creContract(title,des,bet,resdate,bettingends,betweightendpoint,category,creaddr,cretime)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/***************************new 结束**************************/


/****************************创建新的投注  开始****************************/
/*新的投注*/
router.get('/insertbet', function(req, res, next) {
    var id=req.query.contract_id;
    var time=mytime.getFullTime();
    var bet=req.query.yesorno;
    var inaddr='';
    var innum="";
    var outaddr=req.query.outaddr;
    var outnum="";
    var weight="";
    var isok="0";
    coinapi.getaddr()
    .then((ret)=>{
      inaddr=ret.msg;
      // console.log(ret.msg+"********************");
      return db.insertBet(id,time,bet,inaddr,innum,outaddr,outnum,weight,isok)
    })
    .then((ret)=>{
      // res.json(ret._id)
      // let resultData = JSON.parse(ret);
      // console.log(ret._id);
      res.json(ret._id)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/*显示当前下注的押注地址*/
router.get('/showSendAddr', function(req, res, next) {
    db.searchBetByIdSelf(req.query.contract_id)
    .then((ret)=>{
      console.log(ret);
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/****************************创建新的投注  结束****************************/


/****************************browse detail 开始 *************************************/
/*id查询合约信息*/
router.get('/searchContractById', function(req, res, next) {
    db.searchContractById(req.query.contract_id)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/*id查询押注*/
router.get('/searchBetById', function(req, res, next) {
  // console.log(req.query.isok+'*********************');
    db.searchBetById(req.query.contract_id,req.query.isok)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*id查询评论*/
router.get('/searchCommentById', function(req, res, next) {
    var contract_id=req.query.contract_id;
    var isok= req.query.isok;
    db.searchCommentById(contract_id,isok)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*id插入评论*/
router.get('/insertComment', function(req, res, next) {
  var contract_id=req.query.contract_id;
  var time=mytime.getFullTime();
  var name=req.query.postmen;
  var comment=req.query.postcontent;
    db.insertComment(contract_id,time,name,comment)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/****************************browse detail 结束 *************************************/


/*******************************************************************/
/****************************管理系统的接口***************************************/
/*******************************************************************/

/****************************BetRecord 开始***************************/
/*更新投注的状态*/
router.get('/updateBetStatus', function(req, res, next) {
  var time=req.query.time;
    var isok =req.query.isok;
    db.updateBetStatus(time,isok)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*更新投注 数据 and 是否加入到合约表中的状态  */
router.get('/updateBetJoinStatus', function(req, res, next) {
    var time=req.query.time;
    var isjoin =req.query.isjoin;
    var bet='';
    var innum='';
    db.updateBetJoinStatus(time,isjoin)
    .then((ret)=>{
      bet=ret.bet; //记录该条数据押注 yes  还是  no
      innum=ret.innum;  //记录 押入的 BCC 数量
      return db.searchContractById(ret.contract_id);
    })
    .then((ret)=>{
      return db.updateContract(ret[0]._id,ret[0].totalbet,ret[0].totalyesbet,ret[0].totalnobet,ret[0].totalbetnum,ret[0].nobetnum,ret[0].yesbetnum,bet,innum,isjoin);
    })
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*显示所有的标题*/
router.get('/showAllContracts', function(req, res, next) {
    db.searchContract(req.query.obj1,req.query.obj2)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*更新合约的通过状态*/
router.get('/updateContractIsOk', function(req, res, next) {
  var contract_id=req.query.contract_id;
  var isok=req.query.isok;
    db.updateContractIsOk(contract_id,isok)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});
/*更改  合约的  阶段 状态*/
router.get('/updateContractStatus', function(req, res, next) {
  var contract_id=req.query.contract_id;
  var currentstatus=req.query.currentstatus;
    db.updateContractStatus(contract_id,currentstatus)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/*删除  合约 */
router.get('/removeContract', function(req, res, next) {
  var contract_id=req.query.contract_id;
    db.removeContract(contract_id)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/*更改 开始时间*/
router.get('/updateContractBeginDate', function(req, res, next) {
  var contract_id=req.query.contract_id;
  var begindate=req.query.begindate;
  // console.log(contract_id);
  // console.log(begindate);
    db.updateContractBeginDate(contract_id,begindate)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/*input模糊查询*/
router.get('/searchType', function(req, res, next) {
  var type=req.query.type;
  var contract_id=req.query.contract_id;
    db.searchType(type,contract_id)
    .then((ret)=>{
      res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })
});

/*发送返还的币*/
router.post('/sendcoin',function(req, res, next){
  var contract_id=req.body.id;
  var isok='1';
  // console.log(contract_id);
  db.searchBetByIdSelf(contract_id,isok)
  .then((ret)=>{
    // 查询结果 ret[0]
    // console.log(ret[0]);
    if(Number(ret[0].isout)==0){ //判断 isout字段
      var data={
        name:"rbtc",
        to:ret[0].outaddr,
        amount:ret[0].outnum
      }
      coinapi.sendcoin(data)
      .then((ret)=>{
        console.log(ret);
        if(ret=='error'){
          res.json("error");
        }else {
          db.updateBetIsout(contract_id)
        }

      })
      .then((ret)=>{
        // console.log(ret);
        res.json("outok")
      })
    }else {
      res.json("outed");
      return false;
    }

  })
  .catch((err)=>{
    console.log(err);
  })
})
/****************************BetRecord 结束***************************/
module.exports = router;
