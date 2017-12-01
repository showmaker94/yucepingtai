var http=require('http');
var db=require("../public/javascripts/db")
var mytime=require('./../public/javascripts/log.js');
// //get 请求外网

// return new Promise((resolve,reject)=>{
//
//   Bet.findOneAndUpdate({time:time},{isok:isok},function(err,docs){
//   if (err) return reject(err);
//   return resolve(docs);
// })
// })
exports.getaddr=()=>{
  return new Promise((resolve,reject)=>{
    http.get('http://120.92.192.127:1990/v1/getnewaddress?name=rbtc',function(req,res){
        var html='';
        req.on('data',function(data){
            html+=data;
        });
        req.on('end',function(){
            // console.info(html);
            return resolve(JSON.parse(html));
        });
    });
  })

}



// {"err":0,"msg":"mkPYowxhHAxNW7GUrJCfVFVh4y82YLeHpB"}


exports.sendcoin=(data)=>{
  var data=data;
    return new Promise((resolve,reject)=>{
      // var data = {
      //   "name":"rbtc",
      //   "to":"mrc8mmL3BkXh3WbrYXgNnWjuPsmrUmNP5y",
      //   "amount":"1"
      // };
      // console.log(data);
      data = JSON.stringify(data);
      var opt = {
          method: "POST",
          host: "120.92.192.127",
          port: 1990,
          path: "/v1/sendtransaction",
          headers: {
              "Content-Type": 'application/json',
              "Content-Length": data.length
          }
      };
      var req = http.request(opt, function (serverFeedback) {
        // console.log(serverFeedback.statusCode);
          if (serverFeedback.statusCode == 200) {
            // console.log(123999999);
              var body = "";
              serverFeedback.on('data', function (data) {
                // body += data;
                var mydata=data.toString();
                // mydata=JSON.parse(mydata);
                return resolve(mydata);
               })
              .on('end', function () { });
          }
          else {
              // res.send(500, "error");
              return resolve('error');
          }
      });
      // return resolve(data);
      req.write(data + "\n");
      req.end();
   })
}



exports.getinfo=function(){

  var zmq = require('zmq')
    , sock = zmq.socket('pull');

  sock.connect('tcp://120.92.192.127:1999');
  console.log('Subscriber connected to port 1999');
  //
  sock.on('message', function(message) {
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
    console.log(message);
    message=JSON.parse(message);
    // 当接收到消息时对数据库进行修改
    var name=message.name;
    var category=message.category;
    var address=message.address;
    var amount=message.amount;
    var confirmations=message.confirmations;
    var obj1={};
    var obj2={};
    var bet='';
    var innum='';
    var isjoin='1';
    var id=''
    obj1.inaddr=address;
    obj1=JSON.stringify(obj1);
    obj2=JSON.stringify(obj2);
    db.searchBet(obj1,obj2) //查到inaddr的押注
    .then((ret)=>{
      // console.log(ret);
      // console.log(11111);
      return db.updateBet(ret[0].inaddr,amount) //更新Bet表数据
      // res.json(ret)
    })
    .then((ret)=>{
      //查找到合约表
      // console.log(222222222);
      bet=ret.bet; //记录该条数据押注 yes  还是  no
      innum=ret.innum;  //记录 押入的 BCC 数量
      // console.log(innum);
      id=ret.contract_id;
      return db.searchContractById(ret.contract_id);
    })
    .then((ret)=>{
      // console.log(ret);
      //更新合约表数据
      // console.log(333333);
      return db.updateContract(ret[0]._id,ret[0].totalbet,ret[0].totalyesbet,ret[0].totalnobet,ret[0].totalbetnum,ret[0].nobetnum,ret[0].yesbetnum,bet,amount,isjoin);
    })
    .then((ret)=>{
      //查数据
      return db.searchContractById(id);
    })
    .then((ret)=>{
      //在次更新Bet表，更新outnum字段
      // console.log(444444444);
      // console.log(ret);
      var outnum=0;
      console.log(bet);
      if (bet=='yes') {
        // console.log(ret[0].totalbet);
        // console.log(ret[0].totalyesbet);
        // console.log(innum);
        outnum=((((ret[0].totalbet)*0.98)/(ret[0].totalyesbet))*amount).toFixed(5);
        // console.log(outnum);
      }else if (bet=='no') {
        outnum=((((ret[0].totalbet)*0.98)/(ret[0].totalnobet))*amount).toFixed(5);
      }
      return db.updateBet(address,amount,outnum);
    })
    .then((ret)=>{
      // console.log(55555555555);
      // console.log(ret);
      // res.json(ret)
    })
    .catch((err)=>{
      console.log(err);
    })


  });
}



    //
    // {"name":"rbtc","category":"receive","address":"mtnZtd1SgfgFh9vZnutR84PWbg4zkZNoer","amount":1,
    // "confirmations":6,"txid":"5520fadacd224c8723cbcb6961abcda80dfe23f13092ab842993513673d4f7a7"}
