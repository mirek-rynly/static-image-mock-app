/* jshint node: true */
"use strict";

require("log-timestamp");
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');

const EXPRESS_PORT = 8081;

let app = express();

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/1');
});

app.get('/:number', (req, res, next) => {
  let options = { root: 'public'};
  res.sendFile("index.html", options);
});

app.listen(EXPRESS_PORT, () => {
  console.log(`Express server started on port ${EXPRESS_PORT}`);
});
