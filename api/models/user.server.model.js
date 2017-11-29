/*
创建Schema(模式)和model
*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username : String,
  password: String
});

/*
一个mongoose的模型，叫 User
*/
mongoose.model('User',userSchema);
