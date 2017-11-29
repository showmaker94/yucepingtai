/*
创建Schema(模式)和model
*/

var mongoose = require('mongoose');

var newcontractSchema = new mongoose.Schema({
  uid : Number,
  username : String,
  createTime : Date,
  lastLogin : Date
});

/*
一个mongoose的模型，叫 User
*/
mongoose.model('Newcontract',newcontractSchema);
