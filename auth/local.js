const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authHelpers = require('./_helper');
// const init = require('./passport.js');
const knex = require('../models/database');

const options = {};

// init();
console.log(passport);
console.log(authHelpers);
console.log(LocalStrategy);
console.log(knex);
passport.use(new LocalStrategy(options, function (username, password, done) {
  // check to see if the username exists
  console.log("We are in local.js" + username);
  knex('users').where({ username }).first()
  .then(function (user) {
    if (!user) return done(null, false);
    if (!authHelpers.comparePass(password, user.password)) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
  .catch( function(err) { 
    console.log(err);
    return done(err); 
  });
}));

module.exports = passport;