const express = require('express');

const adminHandler = require('../controllers/adminHandler');
const authHandler = require('../controllers/authHandler');

const routeAd = express.Router();


routeAd.get('/profil/:id', adminHandler.profileReader);
routeAd.post('/profilCreate' , adminHandler.profileCreator);
routeAd.put('/profil/:id' , adminHandler.profileModifier);
routeAd.delete('/profil/:id' , adminHandler.profileDeleter);

routeAd.post('/login' , authHandler.loginHandler);



module.exports = routeAd;