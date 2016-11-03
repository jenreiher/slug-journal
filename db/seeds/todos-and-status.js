
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('status').insert({display_value: 'fa-radio-checked'}),
        knex('status').insert({display_value: 'fa-times-circle'}),
        knex('status').insert({display_value: 'fa-circle-arrow-right'}),
        knex('status').insert({display_value: 'fa-question-circle'}),
      ])
      .then(function() {
        knex('todos').del()
      })
      .then(function() {
        return Promise.all([
          // Inserts seed entries
          knex('todos').insert({contents: 'My first todo', status_id: 2}),
          knex('todos').insert({contents: 'Display on page', status_id: 2}),
          knex('todos').insert({contents: 'Toggle status', status_id: 2}),
          knex('todos').insert({contents: 'Make todo status change a pop up', status_id: 2}),
          knex('todos').insert({contents: 'If status changes to 2 copy to next days date', status_id: 2}),
          knex('todos').insert({contents: 'Explore data flow with data mapped to state in app', status_id: 2}),
          knex('todos').insert({contents: 'Set up database', status_id: 2}),
          knex('todos').insert({contents: 'Seed database with this example data', status_id: 2}),
          knex('todos').insert({contents: 'Make the app look pretty', status_id: 1}),
          knex('todos').insert({contents: 'Fetch data from back end', status_id: 1}),
          knex('todos').insert({contents: 'Post data to database', status_id: 1}),
          knex('todos').insert({contents: 'Configure react-router for moving between dates', status_id: 1}),
          knex('todos').insert({contents: 'Configure index page to only show today', status_id: 1})
        ])
      })
    });
};
