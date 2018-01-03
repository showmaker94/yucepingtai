var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  time: String,
  name: String,
  comment: String,
  contract_id: String,
  title: String
});

/*
一个mongoose的模型，叫 Comment
*/
mongoose.model('Comment', commentSchema);