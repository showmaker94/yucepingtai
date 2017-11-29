/*
创建Schema(模式)和model
*/

var mongoose = require('mongoose');

var searchSchema = new mongoose.Schema({
  title:String,
  des:String,
  bet:String,
  begindate:String,
  resdate:String,
  bettingends:String,
  betweightendpoint:String,
  category:String,
  creaddr:String,
  cretime:String,
  isok:String,
  isresolve:String,
  isclosed:String,
  isclosing:String,
  currentstatus:String,
  totalbet:String,
  totalyesbet:String,
  totalnobet:String,
  yesbetnum:String,
  nobetnum:String,
  totalbetnum:String
});

/*
一个mongoose的模型，叫 User
*/
mongoose.model('Search',searchSchema);
