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
    try{req.body = JSON.parse(Object.keys(req.body)[0])}catch(err){req.body = req.body}
    knex
      .returning(['id', 'contents', 'created_at', 'status_id'])
      .insert({
        contents: req.body.contents,
        status_id: req.body.status
      })
      .into('todos')
      .then(function(results) {
        res.setHeader('Access-Control-Allow-Origin', '*'); // remove this for production
        console.log(results[0])
        res.json(results[0]);
      })
  });

  return router;
}