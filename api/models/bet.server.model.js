var mongoose = require('mongoose');

var betSchema = new mongoose.Schema({
  time:String,
  bet:String,
  inaddr:String,
  innum:String,
  outaddr:String,
  outnum:String,
  weight:String,
  isok:String,
  isjoin:String,
  contract_id:String,
  isout:String
});

/*
一个mongoose的模型，叫 Bet
*/
mongoose.model('Bet',betSchema);
