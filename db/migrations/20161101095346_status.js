
exports.up = function(knex, Promise) {
  return knex.schema.createTable('status', function (table) {
    table.increments();
    table.string('display_value');
  })
  .then(function() {
    return knex.schema.createTable('todos', function (table) {
      table.increments();
      table.string('contents');
      table.integer('status_id').unsigned().references('status.id')
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updated_at');
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos')
    .then(function() {
      knex.schema.dropTable('status')
    });
};
