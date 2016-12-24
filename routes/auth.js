const express = require('express'),
      router = new express.Router(),
      passport = require('../auth/local'),
      authHelpers = require('../auth/_helper');

// Post -- register route
router.post('/sign_up', function(req, res, next){
  return authHelpers.createUser(req, res)
    .then(function (res){
      console.log(res)
      passport.authenticate('local', function(err, user, info){
        console.log(user)
        console.log(res)
        if (user){
          handleResponse(res)
        }
        // user.redirect('/');
      })(req, res, next);
    })
  });

function handleResponse(res) {
  res.json({"shit": "damn"});
}



// Post -- Sign in route
router.post('/sign_in', function(req,res,next){
  passport.authenticate('local', function(err, user, info){
    if(!req.isAuthenticated()) {
      req.login(user, function(err){
        if(err){
          return res.status(500).json({
            err: "Could not login user"
          });
        }
        res.redirect('/home');
      })
    }
    else{
      // response when user is already logged in
      res.redirect('/home');
    }
  })(req, res, next)
});


// Get -- Logout
router.get('/sign_out', function(req,res,next){
  req.logout();
  req.session.save(function (err) {
    if(err){
      return next(err)
    }
    res.redirect('/');
  })
});


module.exports = router;
