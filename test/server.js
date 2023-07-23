var express = require('express')
var cors = require('cors')
var app = express()
const data = require('../events.json');

app.use(cors())

app.get('/events', function (req, res, next) {
  res.json(data);
})

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 80')
})

