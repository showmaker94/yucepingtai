var mongoose = require('mongoose');
var Search = mongoose.model('Search');
var MyComment = mongoose.model('Comment');
var Bet = mongoose.model('Bet');
var ConfirmOrder = mongoose.model('ConfirmOrder');

/*××××××××××××××××××contract 表的操作*××××××××××××××××××××××××*/
/*创建合约*/
exports.creContract = (title, des, bet, resdate, bettingends, betweightendpoint, category, creaddr, cretime) => {
  return new Promise((resolve, reject) => {
    var search = new Search({
      title: title,
      des: des,
      begindate: '',
      bet: bet,
      resdate: resdate,
      bettingends: bettingends,
      betweightendpoint: betweightendpoint,
      category: category,
      creaddr: creaddr,
      cretime: cretime,
      isok: '0',
      currentstatus: '0',
      totalbet: '0',
      totalyesbet: '0',
      totalnobet: '0',
      yesbetnum: '0',
      nobetnum: '0',
      totalbetnum: '0'

    });
    search.save(function(err) {
      if (err) {
        res.end('ERROR');
        return next();
      }
    })
    return resolve("ok");
  })
}
/*模糊查询+条件查询*/
exports.searchWord = (obj1, obj2, obj3) => {
  return new Promise((resolve, reject) => {
    Search.find(obj1).or([obj2]).sort(obj3).exec(function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*模糊查询*/
exports.topSearchWord = (obj1, obj2, obj3) => {
  return new Promise((resolve, reject) => {
    Search.find(obj1).or([obj2]).sort(obj3).exec(function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}
/*按条件进行查询，并且按某种条件进行排序,*/
exports.searchContract = (obj1, obj2) => {
  obj1 = JSON.parse(obj1);
  obj2 = JSON.parse(obj2);
  return new Promise((resolve, reject) => {
    Search.find(obj1).sort(obj2).exec(function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*按照 _id  进行合约查询*/

exports.searchContractById = (id) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(id)
    Search.find({
      "isok": '1',
      "_id": sid
    }, function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*更新data页面 合约的 通过 状态*/
exports.updateContractIsOk = (contract_id, isok) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(contract_id)
    Search.findOneAndUpdate({
      _id: sid
    }, {
      isok: isok
    }, function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*更改  合约的  阶段 状态*/
exports.updateContractStatus = (contract_id, currentstatus) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(contract_id)
    Search.findOneAndUpdate({
      _id: sid
    }, {
      currentstatus: currentstatus
    }, function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*更改  合约的  开始投注时间 */
exports.updateContractBeginDate = (contract_id, begindate) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(contract_id)
    Search.findOneAndUpdate({
      _id: sid
    }, {
      begindate: begindate
    }, function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*更改 合约表 数 据*/
exports.updateContract = (contract_id, totalbet, totalyesbet, totalnobet, totalbetnum, nobetnum, yesbetnum, bet, amount, isjoin) => {
  return new Promise((resolve, reject) => {
    // var sid=mongoose.Types.ObjectId(contract_id);
    var obj = {};

    // obj1._id=sid;
    console.log(bet);
    console.log(amount);
    if (bet == 'yes') {
      if (isjoin == 1) {
        obj.totalbet = Number(totalbet) + Number(amount);
        obj.totalyesbet = Number(totalyesbet) + Number(amount);
        obj.totalbetnum = Number(totalbetnum) + 1;
        obj.yesbetnum = Number(yesbetnum) + 1;
      } else {
        obj.totalbet = Number(totalbet) - Number(amount);
        obj.totalyesbet = Number(totalyesbet) - Number(amount);
        obj.totalbetnum = Number(totalbetnum) - 1;
        obj.yesbetnum = Number(yesbetnum) - 1;
      }

    }
    if (bet == 'no') {
      if (isjoin == 1) {
        obj.totalbet = Number(totalbet) + Number(amount);
        obj.totalnobet = Number(totalnobet) + Number(amount);
        obj.totalbetnum = Number(totalbetnum) + 1;
        obj.nobetnum = Number(nobetnum) + 1;
      } else {
        obj.totalbet = Number(totalbet) - Number(amount);
        obj.totalnobet = Number(tottotalnobetalyesbet) - Number(amount);
        obj.totalbetnum = Number(totalbetnum) - 1;
        obj.nobetnum = Number(nobetnum) - 1;
      }
    }
    console.log(obj);
    Search.findByIdAndUpdate(contract_id, obj, function(err, res) {
      if (err) return reject(err);
      console.log(res);
      return resolve(res);
    })
  })
}

/* 删除 合约*/
exports.removeContract = (contract_id, currentstatus) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(contract_id)
    Search.findOneAndRemove({
      _id: sid
    }, function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}


/********************comments*****************************/
/*查询评论*/
exports.searchComment = (obj1, obj2) => {
  obj1 = JSON.parse(obj1);
  obj2 = JSON.parse(obj2);
  return new Promise((resolve, reject) => {
    MyComment.find(obj1).sort(obj2).exec(function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}
/*通过ID查询评论*/
exports.searchCommentById = (id) => {
  var sid = mongoose.Types.ObjectId(id)
  return new Promise((resolve, reject) => {
    MyComment.find({
      'contract_id': sid
    }).sort({
      'time': -1
    }).exec(function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*插入评论*/
exports.insertComment = (contract_id, time, name, comment, title) => {
  return new Promise((resolve, reject) => {
    var mycomment = new MyComment({
      contract_id: contract_id,
      time: time,
      name: name,
      comment: comment,
      title: title
    });
    mycomment.save(function(err, res) {

      if (err) {
        console.log("Error:" + err);
      } else {
        console.log("Res:" + res);
      }

    });

  })
}
/***********************bets**********************/
/*查询押注*/
exports.searchBet = (obj1, obj2) => {
  obj1 = JSON.parse(obj1);
  obj2 = JSON.parse(obj2);
  return new Promise((resolve, reject) => {
    Bet.find(obj1).sort(obj2).exec(function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}
/*按照_id查找押注*/
exports.searchBetById = (contract_id, isok) => {
  var sid = mongoose.Types.ObjectId(contract_id)
  return new Promise((resolve, reject) => {
    var obj = {};
    if (isok != '') {
      obj.isok = isok;
    }
    obj.contract_id = sid;
    Bet.find(obj).sort({
      'time': -1
    }).exec(function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*按照BET 的_id 查找押注*/
exports.searchBetByIdSelf = (contract_id, isok) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(contract_id)
    Bet.find({
      _id: sid
    }).exec(function(err, docs) {
      // console.log(docs);
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

// var sid=mongoose.Types.ObjectId(contract_id)
// Search.findOneAndRemove({_id:sid},function(err,docs){
// if (err) return reject(err);
// return resolve(docs);

/**/

/*插入押注*/
exports.insertBet = (id, time, bet, inaddr, innum, outaddr, outnum, weight, isok, title, name) => {
  return new Promise((resolve, reject) => {
    var obj = new Bet({
      contract_id: id,
      time: time,
      bet: bet,
      inaddr: inaddr,
      innum: innum,
      outaddr: outaddr,
      outnum: outnum,
      weight: weight,
      isok: isok,
      isjoin: '0',
      isout: '0',
      title: title,
      name: name
    });
    obj.save(function(err, res) {

      if (err) {
        console.log("Error:" + err);
      } else {
        console.log("Res:" + res);
      }

    });
    return resolve(obj);
  })

}

/*更新Bet状态*/
exports.updateBetStatus = (betid, isok) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(betid)
    // console.log(time);
    Bet.findOneAndUpdate({
      '_id': sid
    }, {
      isok: isok
    }, function(err, docs) {
      console.log(docs);
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*更新Bet Join状态*/
exports.updateBetJoinStatus = (time, isjoin) => {
  return new Promise((resolve, reject) => {

    Bet.findOneAndUpdate({
      time: time
    }, {
      isjoin: isjoin
    }, function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}

/*更新 isout 字段*/

exports.updateBetIsout = (contract_id) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(contract_id)
    // console.log(sid);
    Bet.findOneAndUpdate({
      '_id': sid
    }, {
      isout: '1'
    }, function(err, docs) {
      if (err) return reject(err);
      // console.log(docs);
      return resolve(docs);
    })
  })
}
/*更新 Bet 的字段*/
exports.updateBet = (address, amount, outnum) => {
  return new Promise((resolve, reject) => {
    var obj = {};
    obj.innum = amount;
    obj.isok = 1;
    obj.isjoin = 1;
    obj.outnum = outnum;
    Bet.findOneAndUpdate({
      inaddr: address
    }, {
      $set: obj
    }, function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}
/*按照押注类型进行查询*/
exports.searchType = (type, contract_id) => {
  return new Promise((resolve, reject) => {
    // var sid=mongoose.Types.ObjectId(contract_id)
    var re = new RegExp(type, 'i');
    Bet.find({
      'contract_id': contract_id
    }).or([{
      'bet': {
        $regex: re
      }
    }]).sort({
      'time': -1
    }).exec(function(err, docs) {
      return resolve(docs);
    });
  })
}
/*插入一条数据到确认交易表*/
exports.insertConfirmOrder = (name, category, address, amount, confirmations, txid) => {
  return new Promise((resolve, reject) => {
    var obj = new ConfirmOrder({
      name: name,
      category: category,
      address: address,
      amount: amount,
      confirmations: confirmations,
      txid: txid,
      isok: 0
    });
    obj.save(function(err, res) {

      if (err) {
        console.log("Error:" + err);
        return reject(err)
      } else {
        console.log("Res:" + res);
        return resolve(res);
      }
    });

  })
}
/*查询是否已经有了当前的TXID*/
exports.searchConfirmOrderByTXID = (txid) => {
  return new Promise((resolve, reject) => {
    var obj = {};
    obj.txid = txid;
    ConfirmOrder.find(obj, (err, docs) => {
      if (err) return reject(err);
      // console.log(docs);
      if (docs == '') {
        return resolve(-1); //返回-1没找到 相应的txid
      } else {
        return resolve(docs);
      }

    })
  })
}
/*通过寻找txid 更新确认数*/
exports.updateConfirmOrderByTXID = (txid, confirmations) => {
  return new Promise((resolve, reject) => {
    var obj = {};
    obj.confirmations = confirmations;
    ConfirmOrder.findOneAndUpdate({
      txid: txid
    }, {
      $set: obj
    }, function(err, docs) {
      if (err) return reject(err);
      if (docs == '') return resolve(-1) //没找到则返回-1
      return resolve(docs);
    })
  })
}
/*确认数超过6 通过TXID查找 更新isok字段*/
exports.updateConfirmOrderIsokByTXID = (txid, isok) => {
  return new Promise((resolve, reject) => {
    var obj = {};
    obj.isok = isok;
    ConfirmOrder.findOneAndUpdate({
      txid: txid
    }, {
      $set: obj
    }, function(err, docs) {
      if (err) return reject(err);
      if (docs == '') return resolve(-1) //没找到则返回-1
      return resolve(docs);
    })
  })
}
/************************users**********************************/

/*****************************************************************/
//后台根据contract_id来修改标题和描述
// ,{title:title},{des:des},{nobetnum:nobetnum},{totalnobet:totalnobet},{yesbetnum:yesbetnum},{totalyesbet:totalyesbet},{totalbetnum:totalbetnum},{totalbet:totalbet}
exports.changeTitleOrDes = (id, title, des, nobetnum, totalnobet, yesbetnum, totalyesbet, totalbetnum, totalbet) => {
  return new Promise((resolve, reject) => {
    var sid = mongoose.Types.ObjectId(id)
    var obj = {};
    obj.title = title;
    obj.des = des;
    obj.nobetnum = nobetnum;
    obj.totalnobet = totalnobet;
    obj.yesbetnum = yesbetnum;
    obj.totalyesbet = totalyesbet;
    obj.totalbetnum = totalbetnum;
    obj.totalbet = totalbet;
    Search.findOneAndUpdate({
      '_id': sid
    }, {
      $set: obj
    }, function(err, docs) {
      if (err) return reject(err);
      return resolve(docs);
    })
  })
}