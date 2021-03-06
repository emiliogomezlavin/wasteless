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
      session_id: req.session.id,
      username: req.body.username,
      password: hash,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      donator: false
    })
}


function loginRedirect (req, res, next){
  if(req.user){
    return res.status(401).json(
      {status: "You are already logged in!"});
  }
  return next();
}

function loginRequired (req, res, next){
  if(!req.user){
    return res.status(401).json(
      {status: "Please log in"});
  }
  next();
}


module.exports = {
  comparePass,
  createUser,
  loginRedirect,
  loginRequired
};
