var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.post('/', function(req, res, next) {
  User.findOne({
    'username': req.body.username
  }, function(err, docs) {
    if (err) {
      res.end('REEOR');
      return next();
    } else if (docs == null) {
      res.json({
        err: '-1',
        msg: 'user not found'
      });
      return;
    } else if (docs.password != req.body.password) {
      res.json("0");
      return;
    } else {
      res.cookie('user', req.body.username, {
        maxAge: 60000
      })
      res.json({
        err: '0',
        msg: "user login ok"
      });
    }
  });
});
router.post('/test', function(req, res) {
  console.log(req.headers.cookie);
})
module.exports = router;