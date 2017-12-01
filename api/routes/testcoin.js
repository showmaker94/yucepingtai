var http=require('http');
// var db=require("../public/javascripts/db")
var mytime=require('./../public/javascripts/log.js');
var data = {
  "name":"rbtc",
  "to":"n3KcX161yt1etYjkd6YU6VQ79GVPXHrAca",
  "amount":"1"
};
// console.log(data);
data = JSON.stringify(data);
// console.log(typeof data);
// console.log(data);
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
          console.log(mydata);
          // console.log(mydata);
          // mydata=JSON.parse(mydata);
          // return resolve(mydata);
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
// })
// }
