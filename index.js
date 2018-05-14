const serverless = require('serverless-http');
const express = require('express');
const app = express();
module.exports.handler = serverless(app);

app.get('/', function (req, res) {
  res.send(req);
});
 