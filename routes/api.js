const express = require('express'),
      router = new express.Router();

router.get('/dashboard', (req, res) => {
  console.log("Dashboard Route Add JSON endpoint here")
  res.json({
    message: "This is the dashboard api endpoint"
  })
})

module.exports = router;
