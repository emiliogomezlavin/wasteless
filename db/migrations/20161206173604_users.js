
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('session_id').notNullable().defaultTo('');
    table.string('username').unique().notNullable().defaultTo('');
    table.string('password').notNullable().defaultTo('');
    table.string('email').notNullable().defaultTo('');
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.boolean('donator').notNullable().defaultTo(false);
    table.string('address').notNullable().defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.string('state').notNullable().defaultTo('');
    table.string('postal_code').notNullable().defaultTo('');
    table.string('phone_number').notNullable().defaultTo('');
    table.string('company_name').notNullable().defaultTo('');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
