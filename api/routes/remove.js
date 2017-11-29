var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Search=mongoose.model('Search');

router.get('/', function(req, res, next) {
  var id= req.query.contract_id;
  var sid=mongoose.Types.ObjectId(id)
  Search.findOneAndRemove({'_id':sid},function(err,docs){
    if (err) {
      res.json(err)
    }else {
      res.json(docs)
    }

  })
});

module.exports = router;
