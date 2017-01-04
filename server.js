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

// Routes
const apiUserRoutes = require('./routes/api_users');
server.use('/api/users', apiUserRoutes); // took off the restrictApi helper function

const apiDonationRoutes = require('./routes/api_donations');
server.use('/api/donations', apiDonationRoutes);

// Auth
const authRoutes = require('./routes/auth');
server.use('/', authRoutes)


// Landing page route for now

server.get('/home', restrict, function(req, res) {
  // req.cookies['connect.sid'] = (req.session.passport || null);
  // console.log(req.cookies)
  res.sendFile(path.join(__dirname + '/app/public/home.html'))
})

// Auth Helper Function - Needs to be called after authenticate
function restrict(req, res, next) {
  // console.log(req.session.username)
  // if (!req.session.username) {
  //   res.redirect('/');
  // }
  next()
}

// Restrics /api endpoints since they are for internal use
function restrictApi(req, res, next) {
  if(req){
    res.redirect('/home')
  }
}

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
