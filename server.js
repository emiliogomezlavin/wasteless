const express = require('express'),
      server = express(),
      _ = require('underscore');

server.use(express.static('./app/public'));


const allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    res.setHeader('Access-Control-Allow-Credentials', true)
}

server.use(allowCrossDomain);


server.listen(process.env.PORT || 3000);

console.log("App running in port 3000");
