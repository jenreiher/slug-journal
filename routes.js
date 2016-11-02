var express = require('express');
var router = express.Router();

module.exports = (knex) => {
  
  // get all statuses
  router.get('/status', function(req, res) {
    knex
      .select()
      .table("status")
      .orderBy('id', 'asc')
      .then((results)=> {
        res.setHeader('Access-Control-Allow-Origin', '*'); // remove this for production
        res.json(results);
      });
  });

  // get all todos
  router.get('/todos', function(req, res) {
    knex
      .select()
      .table("todos")
      .then((results) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); // remove this for production
        res.json(results);
    });
  });

 // add new todos
  router.get('/todos/new', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // remove this for production
  })

  router.post('/todos/new', function(req, res) {
    console.log(req)
    knex('todos')
      .returning('id')
      .insert({
        contents: req.contents,
        status_id: req.status
      })
      .then((results)=> {
        res.setHeader('Access-Control-Allow-Origin', '*'); // remove this for production
        console.log(results[0]);
        res.json(results);
    });
  });

  return router;
}