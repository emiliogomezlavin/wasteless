const express = require('express'),
      knex = require('../models/database'),
      handleResponse = require('../helpers/api_helper'),
      router = new express.Router();

// Index of all donations
router.get('/', function (req, res) {
  knex('donations')
    .select('*')
    .then(function(data){
      res.json({
        data: data
      })
    })
    .catch(handleResponse); 
})

// Create new donation
router.post('/new', function (req, res) {
  knex('donations')
    .returning(['id', 'description', 'contents', 'donator_id'])
    .insert({
      description: req.body.description,
      contents: req.body.contents,
      donator_id: 1//req.session.id
    })
    .then(function(data){
      res.json({
        data: data
      })
    })
    .catch(handleResponse);
})

// Show donation
router.get('/:id', function (req, res) {
  knex('donations')
    .select('id','description','contents','donator_id')
    .where('id', req.params.id)
    .then(function(data){
      res.json({
        data: data
      })
    })
    .catch(handleResponse);
})

// Edit selected donation
router.put('/:id', function (req, res) {
  knex('donations')
    .where('id', req.params.id)
    .returning(['id', 'description', 'contents', 'donator_id'])
    .update({
      description: req.body.description,
      contents: req.body.contents
    })
    .then(function(data){
      res.json({
        data: data
      })
    })
    .catch(handleResponse);
})

// Delete seleceted donation
router.delete('/:id', function (req, res) {
  knex('donations')
    .where('id', req.params.id)
    .del()
    .then(function(){
      res.json({message: "donation deleted"})
      // res.redirect('/api/donations');
    })
})


module.exports = router;
