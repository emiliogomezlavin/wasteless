const express = require('express'),
      server = express(),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      _ = require('underscore');

// Connect DB and load models
// require('./models').connect('mongodb:localhost/wastless_app');

server.use(express.static('./app/public'));
server.use(bodyParser.urlencoded({ extended: false }));

// Passport Middleware
server.use(passport.initialize());

// Load passport strategies


// Helpers for passport this will check for ifLoggedin
const authCheck = require('./helpers/auth-check');
server.use('/api', authCheck);

// Routes
const apiRoutes = require('./routes/api')
server.use('/api', apiRoutes)

const allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    res.setHeader('Access-Control-Allow-Credentials', true)
}

server.use(allowCrossDomain);


server.listen(process.env.PORT || 3000, () => {
  console.log("App running in port 3000");
});
