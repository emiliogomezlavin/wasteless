
exports.up = function(knex, Promise) {
    return knex.schema.createTable('donations', (table) => {
    table.increments();
    table.integer('donator_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.string('description').notNullable();
    table.string('contents').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donations');
};
