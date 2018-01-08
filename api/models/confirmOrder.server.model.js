var mongoose = require('mongoose');

var confirmorderSchema = new mongoose.Schema({
  name: String,
  category: String,
  address: String,
  amount: String,
  confirmations: String,
  txid: {
    type: String,
    unique: true
  },
  isok: String
});

/*
一个mongoose的模型，叫 ConfirmOrder
*/
mongoose.model('ConfirmOrder', confirmorderSchema);