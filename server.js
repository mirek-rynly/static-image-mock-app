/* jshint node: true */
"use strict";

require("log-timestamp");
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');

const EXPRESS_PORT = 8081;

let app = express();

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

// Server static pages located in script dir
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/screen/1');
});


app.get('/screen/:number', (req, res, next) => {

  var options = {
    root: __dirname,
    // dotfiles: 'deny',
    // headers: {
    //   'x-timestamp': Date.now(),
    //   'x-sent': true
    // }
  };

  let number = req.params.number;

  res.sendFile("/public/index.html", options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log(`On route ${number}`);
    }
  });
});

app.listen(EXPRESS_PORT, () => {
  console.log(`Express server started on port ${EXPRESS_PORT}`);
});
