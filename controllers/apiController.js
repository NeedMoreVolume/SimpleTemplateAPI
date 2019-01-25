// .controllers/apiController

const Data = require('../models/data');
const ApiUtils = require('../utils/apiUtils');
const https = require("https");


exports.hello = (req, res, next) => {
  res.json({success: "Hello, " + req.ip});
};

exports.check = (req, res, next) => {
  let promise = Data.find().sort({date: -1}).exec();
  promise.then((datas) => {
    if (datas.length) {
      let time = parseInt(Date.now()/1000);
      let startTime = datas[0].date + 86400;
      let endTime = datas[0].date + (2*86400);
      if (ApiUtils.checkDate(time, endTime)) {
        ApiUtils.getData(res, startTime);
      } else {
        res.json({success: true});
      }
    } else {
      ApiUtils.getData(res, 0);
    }
  }).catch((err) => {
    console.log(err);
    res.json({error: err});
  });
};

exports.getDailySticks = (req, res, next) => {
  let promise = Data.find().sort({date: -1}).exec();
  promise.then((datas) => {
    res.json({data: datas});
  }).catch((err) => {
    res.json({error: err});
  });
}
