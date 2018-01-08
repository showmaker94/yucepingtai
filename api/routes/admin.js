var express = require('express');
var router = express.Router();
var db = require("../public/javascripts/db")
var mytime = require('./../public/javascripts/log.js');
var coinapi = require('./bitgogogo.js');
/*******************************************************************/
/****************************管理系统的接口***************************************/
/*******************************************************************/

/****************************BetRecord 开始***************************/
/*更新投注的状态*/
router.get('/updateBetStatus', function(req, res, next) {
  var betid = req.query.betid;
  var isok = req.query.isok;
  console.log(betid);
  console.log(isok);
  db.updateBetStatus(betid, isok)
    .then((ret) => {
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});
/*更新投注 数据 and 是否加入到合约表中的状态  */
router.get('/updateBetJoinStatus', function(req, res, next) {
  var time = req.query.time;
  var isjoin = req.query.isjoin;
  var bet = '';
  var innum = '';
  db.updateBetJoinStatus(time, isjoin)
    .then((ret) => {
      bet = ret.bet; //记录该条数据押注 yes  还是  no
      innum = ret.innum; //记录 押入的 BCC 数量
      return db.searchContractById(ret.contract_id);
    })
    .then((ret) => {
      return db.updateContract(ret[0]._id, ret[0].totalbet, ret[0].totalyesbet, ret[0].totalnobet, ret[0].totalbetnum, ret[0].nobetnum, ret[0].yesbetnum, bet, innum, isjoin);
    })
    .then((ret) => {
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});
/*显示所有的标题*/
router.get('/showAllContracts', function(req, res, next) {
  db.searchContract(req.query.obj1, req.query.obj2)
    .then((ret) => {
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});
/*更新合约的通过状态*/
router.get('/updateContractIsOk', function(req, res, next) {
  var contract_id = req.query.contract_id;
  var isok = req.query.isok;
  db.updateContractIsOk(contract_id, isok)
    .then((ret) => {
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});
/*更改  合约的  阶段 状态*/
router.get('/updateContractStatus', function(req, res, next) {
  var contract_id = req.query.contract_id;
  var currentstatus = req.query.currentstatus;
  db.updateContractStatus(contract_id, currentstatus)
    .then((ret) => {
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});

/*删除  合约 */
router.get('/removeContract', function(req, res, next) {
  var contract_id = req.query.contract_id;
  db.removeContract(contract_id)
    .then((ret) => {
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});

/*更改 开始时间*/
router.get('/updateContractBeginDate', function(req, res, next) {
  var contract_id = req.query.contract_id;
  var begindate = req.query.begindate;
  // console.log(contract_id);
  // console.log(begindate);
  db.updateContractBeginDate(contract_id, begindate)
    .then((ret) => {
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});

/*input模糊查询*/
router.get('/searchType', function(req, res, next) {
  var type = req.query.type;
  var contract_id = req.query.contract_id;
  db.searchType(type, contract_id)
    .then((ret) => {
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});

/*发送返还的币*/
router.post('/sendcoin', function(req, res, next) {
  var contract_id = req.body.id;
  var isok = '1';
  db.searchBetByIdSelf(contract_id, isok)
    .then((ret) => {
      if (ret == '') {
        console.log("没有该ID");
      }
      // 查询结果 ret[0]
      // console.log(ret[0]);
      else {
        // console.log(ret[0]);
        if (Number(ret[0].isout) == 0) { //判断 isout字段
          var data = {
            name: ret[0].name,
            to: ret[0].outaddr,
            amount: ret[0].outnum
          }
          coinapi.sendcoin(data)
            .then((ret) => {
              // console.log(ret);
              ret = JSON.parse(ret);
              // console.log(ret.msg);
              if (ret.err != 0) {
                res.json(ret.msg);
              } else {
                db.updateBetIsout(contract_id)
              }

            })
            .then((ret) => {
              // console.log(ret);
              res.json("outok")
            })
        } else {
          res.json("outed");
          return false;
        }
      }

    })
    .catch((err) => {
      console.log(err);
    })
})

/* 插入一条数据到ConfirmOrder*/
router.get('/insertConfirmOrder', function(req, res, next) {
  var name = req.query.name;
  var category = req.query.category;
  var address = req.query.address;
  var amount = req.query.amount;
  var confirmations = req.query.confirmations;
  var txid = req.query.txid;
  db.insertConfirmOrder(name, category, address, amount, confirmations, txid)
    .then((ret) => {
      console.log(ret);
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});
/* 查找当前txid是否已经存在*/
router.get('/searchConfirmOrderByTXID', function(req, res, next) {
  var txid = req.query.txid;
  db.searchConfirmOrderByTXID(txid)
    .then((ret) => {
      console.log(ret);
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});
/* 通过查找txid 更新现在的确认数*/

router.get('/updateConfirmOrderByTXID', function(req, res, next) {
  var txid = req.query.txid;
  var confirmations = req.query.confirmations;
  db.updateConfirmOrderByTXID(txid, confirmations)
    .then((ret) => {
      // console.log(ret);
      res.json(ret)
    })
    .catch((err) => {
      console.log(err);
    })
});
module.exports = router;