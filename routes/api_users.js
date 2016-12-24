const express = require('express'),
      knex = require('../models/database'),
      router = new express.Router();

// Index of all donators
router.get('/donators', function (req, res) {
  res.json({
    donators: "list all here"
  })
})
// User profile
router.get('/:id', function(req, res) {
  console.log('hitting id route')
  res.json({
    message: "This is the id api endpoint"
  })
})
router.put('/:id/edit', function(req, res) {
  res.json({
    message: "This is the id/edit api endpoint"
  })
})
router.delete('/:id/delete', function(req, res) {
  res.json({
    message: "This is the delete api endpoint"
  })
})

module.exports = router;
