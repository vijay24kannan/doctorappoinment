'use strict';



var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  router = require('./router');
  

var port = 4040;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router());

app.listen(port);
console.log('Application listening on port ' + port);
