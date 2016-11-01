var moment = require('moment');

exports.seed = function(knex, Promise) {
  var now = moment(Date.now()).format();
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('status').insert({id: 1, display_value: '.'}),
        knex('status').insert({id: 2, display_value: 'x'}),
        knex('status').insert({id: 3, display_value: '>'}),
        knex('status').insert({id: 4, display_value: '?'}),
      ])
      .then(function() {
        knex('todos').del()
      })
      .then(function() {
        return Promise.all([
          // Inserts seed entries
          knex('todos').insert({id: 1, contents: 'My first todo', status_id: 2})
        ])
      })
    });
};
