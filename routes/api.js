const express = require('express'),
      router = new express.Router();

// User profile
router.get('/:id', function ()(req, res) {
  res.json({
    message: "This is the id api endpoint"
  })
})
router.update('/:id/edit', function ()(req, res) {
  res.json({
    message: "This is the id/edit api endpoint"
  })
})
router.delete('/:id/delete', function ()(req, res) {
  res.json({
    message: "This is the delete api endpoint"
  })
})

// Index of all donators
router.get('/donators', function (req, res) {
  res.json({
    donators: "list all here"
  })
})

// Index of all donations
router.get('/donations', function (req, res) {
  res.json({
    donations: "list all donations"
  })
})
router.get('/donations/:id', function (req, res) {
  res.json({
    donations: "list all donations"
  })
})
router.post('/donations/new', donatorHelper, function (req, res) {
  res.json({
    donations: "list all donations"
  })
})
router.update('/donations/:id/edit', function (req, res) {
  res.json({
    donations: "list all donations"
  })
})
router.delete('/donations/:id/delete', function (req, res) {
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
