// TODO refactor into one file chaning the promises so the migrations can be run at the same time

exports.up = function(knex, Promise) {
    // console.log(knex.schema)

  // return knex.schema.createTable('todos', function (table) {
  //   table.increments();
  //   table.string('contents');
  //   table.integer('status_id').unsigned().references('status.id')
  //   table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  //   table.timestamp('updated_at');
  // });
};

exports.down = function(knex, Promise) {
  // return knex.schema.dropTable('todos');
};
