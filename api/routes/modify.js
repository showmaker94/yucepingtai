var express = require('express');
var router = express.Router();
var curd=require("../public/javascripts/db")
router.post('/', function(req, res, next) {
  var id= req.body.contract_id;
  curd.changeTitleOrDes(id,req.body.title,req.body.des,req.body.nobetnum,req.body.totalnobet,req.body.yesbetnum,req.body.totalyesbet,req.body.totalbetnum,req.body.totalbet)
  .then((ret)=>{
    res.json(ret)
  })
  .catch((err)=>{
    console.log(err);
  })
});

module.exports = router;
