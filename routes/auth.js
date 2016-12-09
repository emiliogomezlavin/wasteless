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
router.post('/sign_in', handleLogin, function(req,res,next){
  
  console.log(req.body);
  passport.authenticate('local', function(err, user, info){
    console.log(user);
    if(user) {
      handleResponse(res, 200, 'success');
      res.redirect('/dashboard');
    }
    if (!user) {
      handleResponse(res, 404, 'user not found');
    } 
    if(err) {
      handleResponse(res, 500, 'error');
    }
  })(req, res, next)
});

// Get -- Logout
router.get('/sign_out', authHelpers.loginRequired, function(req,res,next){
  req.logout();
  handleResponse(res, 200, 'success');
});


// Helper

function handleLogin(req, user) {
  return new Promise((resolve, reject) => {
    req.login(user, (err) => {
      if (err) {reject(err);}
      resolve();
    });
  });
}




module.exports = router;