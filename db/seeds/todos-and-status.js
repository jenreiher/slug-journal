
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('status').insert({id: 1, display_value: 'fa-radio-checked'}),
        knex('status').insert({id: 2, display_value: 'fa-times-circle'}),
        knex('status').insert({id: 3, display_value: 'fa-circle-arrow-right'}),
        knex('status').insert({id: 4, display_value: 'fa-question-circle'}),
      ])
      .then(function() {
        knex('todos').del()
      })
      .then(function() {
        return Promise.all([
          // Inserts seed entries
          knex('todos').insert({id: 1, contents: 'My first todo', status_id: 2}),
          knex('todos').insert({id: 2, contents: 'Display on page', status_id: 2}),
          knex('todos').insert({id: 3, contents: 'Toggle status', status_id: 2}),
          knex('todos').insert({id: 4, contents: 'Make todo status change a pop up', status_id: 2}),
          knex('todos').insert({id: 5, contents: 'If status changes to 2 copy to next days date', status_id: 2}),
          knex('todos').insert({id: 6, contents: 'Explore data flow with data mapped to state in app', status_id: 2}),
          knex('todos').insert({id: 7, contents: 'Set up database', status_id: 2}),
          knex('todos').insert({id: 8, contents: 'Seed database with this example data', status_id: 2}),
          knex('todos').insert({id: 9, contents: 'Make the app look pretty', status_id: 1}),
          knex('todos').insert({id: 10, contents: 'Fetch data from back end', status_id: 1}),
          knex('todos').insert({id: 11, contents: 'Post data to database', status_id: 1}),
          knex('todos').insert({id: 12, contents: 'Configure react-router for moving between dates', status_id: 1}),
          knex('todos').insert({id: 13, contents: 'Configure index page to only show today', status_id: 1})
        ])
      })
    });
};
