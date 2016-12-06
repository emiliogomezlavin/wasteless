const express = require('express'),
      router = new express.Router();

router.get('/dashboard', (req, res) => {
  console.log("Dashboard Route Add JSON endpoint here")
})

module.exports = router;
