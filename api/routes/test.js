var http=require('http');
var db=require("../public/javascripts/db")
var mytime=require('./../public/javascripts/log.js');
// var http=require('http');
// var data=data;
// var data = {
//   "name":"rbtc",
//   "to":"mtE4M3PwdGkc66SsGTnqCp7ZsM1Px4q7tD",
//   "amount":"1"
// };
// // console.log(data);
// data = JSON.stringify(data);
// // console.log(data);
// var opt = {
//     method: "POST",
//     host: "120.92.192.127",
//     port: 1990,
//     path: "/v1/sendtransaction",
//     headers: {
//         "Content-Type": 'application/json',
//         "Content-Length": data.length
//     }
// };
//
// var req = http.request(opt, function (serverFeedback) {
//     if (serverFeedback.statusCode == 200) {
//         var body = "";
//         serverFeedback.on('data', function (data) {
//           // body += data;
//           var mydata=data.toString();
//           console.log(mydata);
//           // mydata=JSON.parse(mydata);
//           // return resolve(data);
//          })
//         .on('end', function () { });
//     }
//     else {
//         // res.send(500, "error");
//         return resolve('error');
//     }
// });
// req.write(data + "\n");
// req.end();
var message={"name":"rbtc","category":"receive","address":"mtE4M3PwdGkc66SsGTnqCp7ZsM1Px4q7tD","amount":4,"confirmations":6,"txid":"ced89993ab000a745f9378007b6883f5e9b4f79e7130dc08892099605f29afac"}
// console.log(message);
// message = message.toString();
// message=JSON.parse(message);
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
obj1.inaddr=address;
obj1=JSON.stringify(obj1);
obj2=JSON.stringify(obj2);
db.searchBet(obj1,obj2) //查到inaddr的押注
.then((ret)=>{
  // console.log(ret);
  return db.updateBet(ret[0].inaddr,amount) //更新Bet表数据
  // res.json(ret)
})
.then((ret)=>{
  //查找到合约表
  bet=ret.bet; //记录该条数据押注 yes  还是  no
  innum=ret.innum;  //记录 押入的 BCC 数量
  return db.searchContractById(ret.contract_id);
})
.then((ret)=>{
  //更新合约表数据
  return db.updateContract(ret[0]._id,ret[0].totalbet,ret[0].totalyesbet,ret[0].totalnobet,ret[0].totalbetnum,ret[0].nobetnum,ret[0].yesbetnum,bet,innum,isjoin);
})
.then((ret)=>{
  //在次更新Bet表，更新outnum字段
  var outnum=0;
  if (bet=='yes') {
    console.log(ret.totalbet);
    console.log(ret.totalyesbet);
    console.log(innum);
    outnum=(((ret.totalbet)*0.98)/ret.totalyesbet)*innum;
  }else if (bet=='no') {
    outnum=(((ret.totalbet)*0.98)/ret.totalnobet)*innum;
  }
  return db.updateBet(address,amount,outnum);
})
.then((ret)=>{
  console.log(ret);
  // res.json(ret)
})
.catch((err)=>{
  console.log(err);
})
