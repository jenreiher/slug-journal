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

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

var routes = require('./routes.js')
app.use('/', routes);

app.listen(8000, '0.0.0.0', function () {
  console.log('Example app listening on port 8000!');
});



// require('dotenv').config();
// const PORT        = process.env.PORT || 8080;
// const ENV         = process.env.ENV || "development";
// const Express = require("express");
// const Server = require('http');
// const app = new Express();
// const server = new Server(app);

// const React = require("react");
// const renderToString = require("react-dom/server");
// const match = require("react-router");
// const RouterContext = require("react-router");
// const routes = require("routes");

// const bodyParser  = require("body-parser");
// const sass        = require("node-sass-middleware");

// const knexConfig  = require("./knexfile");
// const knex        = require("knex")(knexConfig[ENV]);
// const morgan      = require('morgan');
// const knexLogger  = require('knex-logger');




// initialize the server and configure support for ejs templates
// using the configuration from https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(Express.static(path.join(__dirname, 'static')));

// // universal routing and rendering
// app.get('*', (req, res) => {
//   match(
//     { routes, location: req.url },
//     (err, redirectLocation, renderProps) => {

//       // in case of error display the error message
//       if (err) {
//         return res.status(500).send(err.message);
//       }

//       // in case of redirect propagate the redirect to the browser
//       if (redirectLocation) {
//         return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//       }

//       // generate the React markup for the current route
//       let markup;
//       if (renderProps) {
//         // if the current route matched we have renderProps
//         markup = renderToString(<RouterContext {...renderProps}/>);
//       } else {
//         // otherwise we can render a 404 page
//         markup = renderToString(<NotFoundPage/>);
//         res.status(404);
//       }

//       // render the index template with the embedded React markup
//       return res.render('index', { markup });
//     }
//   );
// });

// // Seperated Routes for each Resource
// const usersRoutes = require("./routes/users");

// // Load the logger first so all (static) HTTP requests are logged to STDOUT
// // 'dev' = Concise output colored by response status for development use.
// //         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(morgan('dev'));

// // Log knex SQL queries to STDOUT as well
// app.use(knexLogger(knex));

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/styles", sass({
//   src: __dirname + "/styles",
//   dest: __dirname + "/public/styles",
//   debug: true,
//   outputStyle: 'expanded'
// }));
// app.use(express.static("public"));

// // Mount all resource routes
// app.use("/api/users", usersRoutes(knex));

// // Home page
// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.listen(PORT, () => {
//   console.log("Example app listening on port " + PORT);
// });