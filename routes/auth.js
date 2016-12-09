const express = require('express'),
      router = express.Router(),
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
router.post('/sign_in', authHelpers.loginRedirect, function(req,res,next){
  return passport.authenticate('local', function(err, user, info){
    if(user) {
      handleResponse(res, 200, 'success');
    }
    if (!user) {
      handleResponse(res, 404, 'user not found');
    } 
    if(err) {
      handleResponse(res, 500, 'error');
    }
  })(req, res, next);
});

// Get -- Logout





module.exports = router;