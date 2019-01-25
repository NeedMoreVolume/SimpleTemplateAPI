const https = require('https');
const Data = require('../models/data');


function getData(res, startTime) {
  let stickSize = 86400;
  if (startTime === 0) {
    startTime = 1405699200;
  }
  let url = 'https://poloniex.com/public?command=returnChartData&currencyPair=BTC_XMR&start=' + startTime + '&end=999999999999&period='+stickSize;
  https.get(url,(response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      let re_data = JSON.parse(data);
      let time = parseInt(Date.now()/1000);
      if (re_data.length) {
        for (let data1 of re_data) {
          if (checkDate(time, data1.date + 86400)) {
            Data.create(data1);
          }
        }
      } else {
        if (checkDate(time, re_data.date + 86400)) {
          Data.create(re_data);
        }
      }
      return res.json({success: true});
    });
  }).on('error', (err) => {
    console.error(err);
    return res.status(400).json({success: false});
  });
}

function checkDate(time, endTime) {
  if (time > endTime) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  getData: getData,
  checkDate: checkDate
}
