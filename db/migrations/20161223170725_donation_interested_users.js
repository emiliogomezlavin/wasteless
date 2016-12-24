
exports.up = function(knex, Promise) {
  return knex.schema.createTable('donation_users', (table) => {
    table.increments();
    table.integer('donation_id')
      .notNullable()
      .references('id')
      .inTable('donations')
      .onDelete('CASCADE')
      .index();
    table.integer('interested_user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    // table.string('message').notNullable().defaultTo('');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donation_users');
};
