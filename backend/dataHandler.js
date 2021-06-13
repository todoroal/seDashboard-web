const axios = require('axios');

var {getTempDataForecast} = require('../backend/index');
var {getTempCurrentData} = require('../backend/index');
var {getC19Data} = require('../backend/index');
var {getStandardFeed} = require('../backend/index');
var {getArnieQuote} = require('../backend/index');

var currentTemp = await getTempCurrentData()
.then(data => {res.json(data)})
.catch(function (error) {
  console.log(error);
});

