var express = require('express');
var router = express.Router();

module.exports = (knex) => {
  
  // define the home page route
  router.get('/todos', function(req, res) {
    knex
      .select()
      .table("todos")
      .then((results) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); // remove this for production
        res.json(results);
    });
  });

  router.get('/todos/new', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // remove this for production
  })
  // define the about route
  router.post('/todos/new', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // remove this for production
    try{req.body = JSON.parse(Object.keys(req.body)[0])}catch(err){req.body = req.body}
    res.json(req.body)
  });

  return router;
}