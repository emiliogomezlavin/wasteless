
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('session_id').unique().notNullable();
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.boolean('donator').notNullable().defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
