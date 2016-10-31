var express = require('express');
var router = express.Router();

var data = [ 
    {
      id: 0,
      timestamp: '2016-10-30',
      status: 1,
      contents: 'My first todo'
    },
    {
      id: 1,
      timestamp: '2016-10-30',
      status: 1,
      contents: 'Display on page'
    },
    {
      id: 2,
      timestamp: '2016-10-30',
      status: 1,
      contents: 'Toggle status'
    },
    {
      id: 3,
      timestamp: '2016-10-31',
      status: 1,
      contents: 'Group todos by date'
    },
    {
      id: 4,
      timestamp: '2016-10-31',
      status: 1,
      contents: 'Make todo status change a pop up'
    },
    {
      id: 5,
      timestamp: '2016-10-31',
      status: 1,
      contents: 'Add new todo'
    },
    {
      id: 6,
      timestamp: '2016-10-31',
      status: 1,
      contents: 'If status changes to 2 copy to next days date'
    },
    {
      id: 7,
      timestamp: '2016-10-31',
      status: 0,
      contents: 'Explore data flow with data mapped to state in app'
    },
    {
      id: 8,
      timestamp: '2016-10-31',
      status: 0,
      contents: 'Set up database'
    },
    {
      id: 9,
      timestamp: '2016-10-31',
      status: 0,
      contents: 'Seed database with this example data'
    },
    {
      id: 10,
      timestamp: '2016-10-31',
      status: 0,
      contents: 'Connect fetch data from database'
    },
    {
      id: 11,
      timestamp: '2016-10-31',
      status: 0,
      contents: 'Post data to database'
    },
    {
      id: 12,
      timestamp: '2016-10-31',
      status: 0,
      contents: 'Configure react-router for moving between dates'
    },
    {
      id: 13,
      timestamp: '2016-10-31',
      status: 0,
      contents: 'Configure index page to only show today'
    },
    {
      id: 14,
      timestamp: '2016-10-31',
      status: 0,
      contents: ''
    }
  ];

// define the home page route
router.get('/todos', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data);
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;