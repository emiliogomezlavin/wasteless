const express = require('express'),
      knex = require('../models/database'),
      bcrypt = require('bcrypt'),
      handleResponse = require('../helpers/api_helper'),
      router = new express.Router();

// Index of all donators
router.get('/donators', function (req, res) {
  knex('users').where('donator', true).select(['username', 'first_name', 'last_name', 'email'])
    .then(function(data) {
    res.json({
      data: data
    })
  })
  .catch(handleResponse)
})
// User profile
router.get('/:id', function(req, res) {
  knex('users').whereIn('id', req.params.id).then(function(data) {
    res.json({
      data: data
    })
  })
  .catch(handleResponse)
})

router.put('/:id', function(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  var profile = {
    username: req.body.username,
    password: hash,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  knex('users').where('id', req.params.id).returning(['username', 'password', 'email', 'first_name', 'last_name']).update(profile).then(function(data){
    console.log("Updated Profile: " + profile)
  })
  .catch(handleResponse)
})

router.delete('/:id/delete', function(req, res, next) {
  knex('users').where('id', req.params.id).del().then(function() {
    res.redirect('/')
  })
})

module.exports = router;
