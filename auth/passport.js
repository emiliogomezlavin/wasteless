const passport = require('passport'),
      knex = require('../models/database.js');

// function serialize() {
//   console.log("in passport js")
//   // passport.serializeUser( function (user, done){
//   //   console.log(user);
//   //   // done(null, user.id);
//   // });
// }

// function deserialize(){
//   console.log(passport.deserializeUser);
//   passport.deserializeUser( function (id, done){
//     console.log("inside deserializeUser");
//     knex('users').where({id}).first()
//     .then(function (user) { done(null, user);})
//     .catch(function (err) {
//       console.log(err);
//       done(err, null);
//     });
//   })
// }



// module.exports = {
//   serialize,
//   deserialize
// }


module.exports = () => {
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    knex('users').where({id}).first()
    .then((user) => { done(null, user); })
    .catch((err) => { done(err,null); });
  });

};

