// ./models/data.js

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var dataSchema = new Schema({
  "date": Number,
  "high": Number,
  "low": Number,
  "open": Number,
  "close": Number,
  "volume": Number,
  "quoteVolume": Number,
  "weightedAverage": Number
});

module.exports = mongoose.model('data', dataSchema );
