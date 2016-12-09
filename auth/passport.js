const passport = require('passport'),
      knex = require('../models/database.js');

module.exports = function () {
  passport.serializeUser( function (user, done){
    done(null, user.id);
  });

  passport.deserializeUser( function (id, done){
    knex('users').where({id}).first()
    .then(function (user) { done(null, user);})
    .catch(function (err) {
      console.log(err);
      done(err, null);
    });
  })
}
