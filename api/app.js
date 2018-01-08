var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
  else next();

});
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser('session'));
app.use(session({
  secret: 'session', //与cookieParser中的一致
  resave: true,
  saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
app.use(express.static(path.join(__dirname, 'public')));

//引入mongoose
var mongoose = require('./config/mongoose.js');
var db = mongoose();
var mongoose = require('mongoose');
var User = mongoose.model('User');

var index = require('./routes/index');
var users = require('./routes/users');
var search = require('./routes/search');
var addcontract = require('./routes/addcontract');
var insert = require('./routes/insert');
var checkuser = require('./routes/checkuser');
var update = require('./routes/update');
var modify = require('./routes/modify');
var remove = require('./routes/remove');
var api = require('./routes/api');
var adminapi = require('./routes/admin');

// sock
var sock = require('./routes/bitgogogo')
sock.getinfo();


// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
//   else next();
//
// });


//登录拦截
// var admin = express.Router();

// admin.use(function(req, res, next) {
//   if (req.session.user) {
//     next();
//   } else {
//     return res.send({
//       err: -1,
//       msg: "not auth!"
//     });
//   }
// })
// app.use('/admin', admin);
app.use('/', index);
app.use('/users', users);
app.use('/search', search);
app.use('/addcontract', addcontract);
app.use('/insert', insert);
app.use('/checkuser', checkuser);

app.use('/update', update);
app.use('/modify', modify);
app.use('/remove', remove);
app.use('/api', api);
// app.use('/admin/adminapi', adminapi);


app.post('/login', function(req, res, next) {
  console.log(req.cookies);
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
      req.session.user = req.body.username;
      res.json({
        err: '0',
        msg: "user login ok"
      });
    }
  });
});


app.post('/logout', function(req, res) {
  req.session.user = null
  return res.send({
    err: 0,
    msg: "loged out!"
  })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;