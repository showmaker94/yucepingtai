/*
配置mongoose
*/
var mongoose = require('mongoose');
var config = require('./config.js');

module.exports = function() {
    var db = mongoose.connect(config.mongodb);

    /*
      在配置中引入mongoose的模型
    */
    require('../models/user.server.model.js');
    require('../models/search.server.model.js')
    require('../models/comment.server.model.js')
    require('../models/bet.server.model.js')
    return db;
}
