/* jshint node: true */
"use strict";

require("log-timestamp");
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
const EXPRESS_PORT = 8081;

let app = express();

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use('/', express.static('public'));


app.get('/walmart/:number?', (req, res, next) => {
  let pageNumber = req.params.number;
  processRequest('walmart', pageNumber, req, res, next);
});

app.get('/sainsbury/:number?', (req, res, next) => {
  let pageNumber = req.params.number;
  processRequest('sainsbury', pageNumber, req, res, next);
});


function processRequest(client, pageNumber, req, res, next) {
  if (!pageNumber) {
    res.redirect(`/${client}/1`);
    return;
  }

  let options = { root: 'public'};
  res.sendFile("slide.html", options);
}

app.listen(EXPRESS_PORT, () => {
  console.log(`Express server started on port ${EXPRESS_PORT}`);
});
