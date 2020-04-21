/* jshint node: true */
"use strict";

require("log-timestamp");
let express = require('express');
const EXPRESS_PORT = 8081;

let app = express();

// Server static pages located in script dir
app.use(express.static(__dirname));
app.use(express.json());

app.listen(EXPRESS_PORT, () => {
  console.log(`Express server started on port ${EXPRESS_PORT}`);
});
