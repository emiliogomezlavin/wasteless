const express = require('express'),
      path = require('path'),
      server = express(),
      bodyParser = require('body-parser'),
      db = require('./models/database'),
      session = require('express-session'),
      cookieParser = require('cookie-parser'),
      passport = require('./auth/local'),
      knex = require('./models/database'),
      _ = require('underscore');



// server configs
server.use(express.static('./app/public'));
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();

// session / passport config
server.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());


// serialize and deserialize methods
passport.serializeUser( function (user, done){
    done(null, user.id);
  });
passport.deserializeUser( function (id, done){
  knex('users').where({id}).first()
  .then(function (user) {
    done(null, user);
  })
  .catch(function (err) {
    console.log(err);
    done(err, null);
  });
})


// Helpers for passport this will check for ifLoggedin
// const authCheck = require('./helpers/auth-check');
// server.use('/api', authCheck);

// Routes
const apiRoutes = require('./routes/api');
server.use('/api', restrict, apiRoutes);

// const  authRoutes = require('./routes/auth');
// server.use('/auth', authRoutes);
function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/');
  }
}


// Landing page route for now
server.get('/home', restrict, function(req, res) {
  res.sendFile(path.join(__dirname + '/app/public/landing-page.html'))
})


// AUTH Post -- Sign in route
server.post('/sign_in', function(req,res,next){
  passport.authenticate('local', function(err, user, info){
    if(!req.isAuthenticated()) {
      req.login(user, function(err){
        if(err){
          return res.status(500).json({
            err: "Could not login user"
          });
        }
        res.redirect('/api/dashboard');
      })
    }
    else{
      // response when user is already logged in
      res.redirect('/home');
    }
  })(req, res, next)
});



// Headers config
const allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    res.setHeader('Access-Control-Allow-Credentials', true)
}
server.use(allowCrossDomain);


// server port listening
server.listen(process.env.PORT || 3000, function () {
  console.log("App running in port 3000");
});
