# SimpleTemplateAPI

ES6 NodeJS/ExpressJS API

This API will collect daily candlestick data on the BTC-XMR currency pair from Poloniex.

# Routes

api/check - checks the data to see if we can get any new candlestick data.
  Since the Poloniex API will return an incomplete daily candle in certain circumstances, this route was added to ensure that data is not being duplicated or missed in the database.

api/data - returns the candlestick data with the sorted from newest to oldest.
