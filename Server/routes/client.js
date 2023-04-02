const route = require('express').Router();

route.get('/home', homeHandler());

module.exports(route)