const express = require('express'),
      knex = require('../models/database'),
      router = new express.Router();

// Index of all donations
router.get('/', function (req, res) {
  res.json({
    donations: "list all donations"
  })
})
router.get('/:id', function (req, res) {
  res.json({
    donations: "donation id"
  })
})
router.post('/new', donatorHelper, function (req, res) {
  res.json({
    donations: "list all donations"
  })
})
router.put('/:id/edit', function (req, res) {
  res.json({
    donations: "list all donations"
  })
})
router.delete('/:id/delete', function (req, res) {
  res.json({
    donations: "list all donations"
  })
})

// Helper function
function donatorHelper() {
  if(req.session){
    console.log(req.session);
  }
}

module.exports = router;
