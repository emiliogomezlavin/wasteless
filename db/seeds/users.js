const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.table('users').del()
    .then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('123456', salt);
      return knex('users').insert({
        id: 1,
        username: 'benyang',
        password: hash,
        email: 'ben@puto.com',
        first_name: 'Benito',
        last_name: 'Camelo',
        donator: false
      })
  });
};
