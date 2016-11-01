
exports.up = function(knex, Promise) {
  return knex.schema.createTable('status', function (table) {
    table.increments();
    table.string('display_value');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('status');
};
