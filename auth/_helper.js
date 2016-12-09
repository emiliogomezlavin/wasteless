const bcrypt = require('bcrypt');
const knex = require('../models/database');

function comparePass (userPassword, databasePassword){
  return bcrypt.compareSync(userPassword, databasePassword);
};

function createUser (req){
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return knex('users')
    .insert({
      username: req.body.username,
      password: hash,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      donator: req.body.donator
    })
    .returning('*');
}


function loginRedirect (req, res, next){
  if(req.user){
    return res.status(401).json(
      {status: "You are already logged in!"});
  }
  return next();
}


module.exports = {
  comparePass,
  createUser,
  loginRedirect
};
