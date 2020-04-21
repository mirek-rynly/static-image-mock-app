/* jshint node: true */
"use strict";

require("log-timestamp");
let express = require('express');
const EXPRESS_PORT = 8081;

let app = express();

// Server static pages located in script dir
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.redirect('/page/1');
});


app.get('/page/:number', (req, res, next) => {

  var options = {
    root: __dirname,
    dotfiles: 'deny',
    // headers: {
    //   'x-timestamp': Date.now(),
    //   'x-sent': true
    // }
  };

  let number = req.params.number;

  res.sendFile("index.html", options, function (err) {
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
