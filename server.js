const express = require('express'),
      path = require('path'),
      server = express(),
      bodyParser = require('body-parser'),
      pg = require('knex')({
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        searchPath: 'knex,public'
      }),
      passport = require('passport'),
      _ = require('underscore');


server.use(express.static('./app/public'));
server.use(bodyParser.urlencoded({ extended: false }));

// Passport Middleware
server.use(passport.initialize());

// Load passport strategies


// Helpers for passport this will check for ifLoggedin
const authCheck = require('./helpers/auth-check');
server.use('/api', authCheck);

// Routes
const apiRoutes = require('./routes/api');
server.use('/api', apiRoutes);

// const  authRoutes = require('./routes/auth');
// server.use('auth', authRoutes);



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
