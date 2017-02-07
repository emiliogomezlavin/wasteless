const express = require('express'),
      router = new express.Router(),
      passport = require('../auth/local'),
      cookieParser = require('cookie-parser'),
      authHelpers = require('../auth/_helper');

router.use(cookieParser());
// Post -- register route
router.post('/sign_up', function(req, res, next){
  return authHelpers.createUser(req, res)
    .then(function (res){
      passport.authenticate('local', function(err, user, info){
        req.session.username = user.username;
        req.session.save();
        if(err){ console.log(err) }

        res.redirect('/home');
      })(req, res, next);
      // res.redirect('/home')
    })
  });

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
        req.session.username = user.username;
        req.session.save();
        res.redirect('/home');
      })
    }
    else{
      // response when user is already logged in
      res.redirect('/home');
    }
  })(req, res, next)
});


router.get('/sign_in', function(req,res,next){
  console.log(req.session)
  res.send(req.session);
});


// Get -- Logout
router.post('/sign_out', function(req,res,next){
  req.logout();
  req.session.username = null
  req.session.save(function (err) {
    if(err){
      return next(err)
    }
  })
  res.redirect('/');
});


module.exports = router;
