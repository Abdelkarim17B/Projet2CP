const express = require('express');

const adminHandler = require('../controllers/adminHandler');
const authHandler = require('../controllers/authHandler');
const changesHandler = require('../controllers/actionsHandles');

const routeAd = express.Router();


routeAd.get('/profil/:id', adminHandler.profileReader);
routeAd.put('/profil/:id' , adminHandler.profileModifier);
routeAd.delete('/profil/:id' , adminHandler.profileDeleter);

routeAd.post('/login' , authHandler.loginHandler);
routeAd.post('/profilCreate', authHandler.registerHandler);

routeAd.post('/catalogue/BankAdder' , changesHandler.bankCreationHandler);
//abe3t lid fel body ta3 request (kayen corpse ta3 prestation)
routeAd.post('/catalogue/PresAdder' , changesHandler.prestationCreationHandler);
routeAd.put('/catalogue/:id' , changesHandler.bankUpdateHandler);
//abe3t lid fel body ta3 request (kayen corpse ta3 prestation), the query designed for the DB dosent support tjibo mel URL
routeAd.put('/prestationmodifier',changesHandler.prestationUpdateHandler);
routeAd.delete('/catalogue/:id',changesHandler.bankPresDeleterHandler);

routeAd.post('/announce/Create' , changesHandler.announceCreationHandler);
routeAd.put('/annouce/Update/:id' , changesHandler.announceUpdateHandler);
routeAd.delete('/annouce/Delete/:id', changesHandler.announceDeleteHandler);



module.exports = routeAd;