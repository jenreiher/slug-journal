"use strict";

// server for webpack during development
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
})
.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Running on port 3000');
});

const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const ENV         = process.env.ENV || "development";
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const routes      = require('./routes.js')

// for parsing application/x-www-form-urlencoded and json data
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use('/', routes(knex));

app.listen(8000, '0.0.0.0', function () {
  console.log('Example app listening on port 8000!');
});
