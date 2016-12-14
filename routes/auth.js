const express = require('express'),
      router = new express.Router(),
      passport = require('../auth/local'),
      authHelpers = require('../auth/_helper');

// Post -- register route
router.post('/sign_up', authHelpers.loginRedirect, function(req, res, next){
  return authHelpers.createUser(req, res)
    .then(function (res){
      passport.authenticate('local', function(err, user, info){
        if (user){
          handleResponse(res, 200, 'success');
        }
      })(req, res, next);
    })
    .catch(function(err){ handelResponse(res, 500, 'error')});
  });

function handleResponse (res, code, statusMsg){
  res.status(code).json({status: statusMsg});
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
router.get('/sign_out', authHelpers.loginRequired, function(req,res,next){
  req.logout();
  handleResponse(res, 200, 'success');
});


module.exports = router;
