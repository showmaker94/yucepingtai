var http = require('http');
var db = require("../public/javascripts/db")
var mytime = require('./../public/javascripts/log.js');
// //get 请求外网

// return new Promise((resolve,reject)=>{
//
//   Bet.findOneAndUpdate({time:time},{isok:isok},function(err,docs){
//   if (err) return reject(err);
//   return resolve(docs);
// })
// })
exports.getaddr = () => {
  return new Promise((resolve, reject) => {
    http.get('http://47.104.78.189:1990/v1/getnewaddress?name=tch', function(req, res) {
      var html = '';
      req.on('data', function(data) {
        html += data;
      });
      req.on('end', function() {
        // console.info(html);
        return resolve(JSON.parse(html));
      });
    });
  })

}



// {"err":0,"msg":"mkPYowxhHAxNW7GUrJCfVFVh4y82YLeHpB"}


exports.sendcoin = (data) => {
  var data = data;
  return new Promise((resolve, reject) => {
    // var data = {
    //   "name":"rbtc",
    //   "to":"mrc8mmL3BkXh3WbrYXgNnWjuPsmrUmNP5y",
    //   "amount":"1"
    // };
    console.log(data);
    data = JSON.stringify(data);
    console.log(data);
    var opt = {
      method: "POST",
      host: "47.104.78.189",
      port: 1990,
      path: "/v1/sendtransaction",
      headers: {
        "Content-Type": 'application/json',
        "Content-Length": data.length
      }
    };
    var req = http.request(opt, function(serverFeedback) {
      // console.log(serverFeedback.statusCode);
      if (serverFeedback.statusCode == 200) {
        // console.log(123999999);
        var body = "";
        serverFeedback.on('data', function(data) {
            // body += data;
            var mydata = data.toString();
            // mydata=JSON.parse(mydata);
            return resolve(mydata);
          })
          .on('end', function() {});
      } else {
        // res.send(500, "error");
        return resolve('error');
      }
    });
    // return resolve(data);
    req.write(data + "\n");
    req.end();
  })
}



exports.getinfo = function() {

  var zmq = require('zmq'),
    sock = zmq.socket('pull');

  sock.connect('tcp://47.104.78.189:1999');
  console.log('Subscriber connected to port 1999');
  //
  sock.on('message', function(message) {
    console.log(message);
    //   var message={
    //     "name":"rbtc",
    //   "category":"receive",
    //   "address":"mxna9r6MVuTWQ2noNiabEisU8AewH63SyE",
    //   "amount":2,
    //   "confirmations":6,
    //   "txid":"ced89993ab000a745f9378007b6883f5e9b4f79e7130dc08892099605f29afac"
    // }
    // console.log(message);
    message = message.toString();
    message = JSON.parse(message);
    // 当接收到消息时对数据库进行修改
    console.log(message);
    var name = message.name;
    var category = message.category;
    var address = message.address;
    var amount = message.amount;
    var confirmations = message.confirmations;
    var txid = message.txid;
    var bet = '';
    var innum = '';
    var isjoin = '1';
    var id = ''
    //先查询是否有这个TXID，如果有，那么更新里面的确认数confirmations
    db.searchConfirmOrderByTXID(txid)
      .then((ret) => {
        if (ret == -1) {
          //如果没有，在这里将得到的数据存入ConfirmOrder表中
          db.insertConfirmOrder(name, category, address, amount, confirmations, txid)
        } else {
          //如果有，则判断确认数是否到达6  不够6 则进行数据库更新
          if (ret[0].confirmations <= 6) {
            // console.log("------------" + ret[0].txid + "----------" + ret[0].confirmations);
            db.updateConfirmOrderByTXID(ret[0].txid, confirmations)
          }
          if (ret[0].confirmations > 6) {
            // console.log("++++++++" + ret[0].txid + "++++++++++" + ret[0].confirmations);
            console.log("***********************");
            //判断isok字段是否wei0  0表示未添加   1表示已经添加
            db.searchConfirmOrderByTXID(ret[0].txid)
              .then(ret => {
                if (ret[0].isok == 1) {
                  console.log("已经添加过了该笔充值");
                } else {
                  db.updateConfirmOrderIsokByTXID(ret[0].txid, '1')
                    .then((ret) => {
                      //isok确定为1
                      /*将amount数量添加到用户的押注地址中*/
                      var obj1 = {};
                      var obj2 = {};
                      obj1.inaddr = ret.address;
                      obj1 = JSON.stringify(obj1);
                      obj2 = JSON.stringify(obj2);
                      return db.searchBet(obj1, obj2)
                    })
                    .then((ret) => {
                      return db.updateBet(ret[0].inaddr, amount) //更新Bet表数据
                    })
                    .then((ret) => {
                      //查找到合约表
                      bet = ret.bet; //记录该条数据押注 yes  还是  no
                      innum = ret.innum; //记录 押入的 BCC 数量
                      // console.log(innum);
                      id = ret.contract_id;
                      return db.searchContractById(ret.contract_id);
                    })
                    .then((ret) => {
                      //更新合约表数据
                      return db.updateContract(ret[0]._id, ret[0].totalbet, ret[0].totalyesbet, ret[0].totalnobet, ret[0].totalbetnum, ret[0].nobetnum, ret[0].yesbetnum, bet, amount, isjoin);
                    })
                    .then((ret) => {
                      //查数据
                      return db.searchContractById(id);
                    })
                    .then((ret) => {
                      //在次更新Bet表，更新outnum字段
                      var outnum = 0;
                      if (bet == 'yes') {
                        outnum = ((((ret[0].totalbet) * 0.98) / (ret[0].totalyesbet)) * amount).toFixed(5);
                      } else if (bet == 'no') {
                        outnum = ((((ret[0].totalbet) * 0.98) / (ret[0].totalnobet)) * amount).toFixed(5);
                      }
                      return db.updateBet(address, amount, outnum);
                    })
                    .then((ret) => {})
                    .catch((err) => {
                      console.log(err);
                    })
                }
              })

          }
        }
      })









  });
}



//
// {"name":"rbtc","category":"receive","address":"mtnZtd1SgfgFh9vZnutR84PWbg4zkZNoer","amount":1,
// "confirmations":6,"txid":"5520fadacd224c8723cbcb6961abcda80dfe23f13092ab842993513673d4f7a7"}