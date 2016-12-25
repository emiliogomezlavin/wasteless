const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.table('users').del()
    .then(knex.table('donations').del())
    .then(knex.table('donation_users').del())
    .then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('123456', salt);
      return knex('users').insert({
        id: 1,
        session_id: "lñsdkfjgkajdl94t40y9w3t3y",
        username: 'benyang',
        password: hash,
        email: 'ben@puto.com',
        first_name: 'Benito',
        last_name: 'Camelo',
        donator: true
      })
    })
    .then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('123456', salt);
      return knex('users').insert({
        id: 2,
        session_id: "lñsdkfjgkajdl94t40y9w3t2345y",
        username: 'mattlag',
        password: hash,
        email: 'matt@cool.com',
        first_name: 'Matt',
        last_name: 'Laguardia',
        donator: false
      })
    })
    .then(function () {
      return knex('donations').insert({
        id: 1,
        description: "Asian restaurant donating delicious dumplings",
        contents: "10 dumplings",
        donator_id: 1
      })
    })
    .then(function () {
      return knex('donation_users').insert({
        id: 1,
        donation_id: 1,
        interested_user_id: 2,
        message: "I want it!"
      })
    });
};
