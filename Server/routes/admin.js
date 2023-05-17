const express = require('express');

const adminHandler = require('../controllers/adminHandler');
const authHandler = require('../controllers/authHandler');
const changesHandler = require('../controllers/actionsHandles');
const statHandler = require('../controllers/statHandler');

const verifier = require('../helpers/authVerifier');
const { verify } = require('jsonwebtoken');
const routeAd = express.Router();

routeAd.get('/profil/:id',verifier ,adminHandler.profileReader);
routeAd.put('/profil/:id' , verifier,adminHandler.profileModifier);
routeAd.delete('/profil/:id' ,verifier ,  adminHandler.profileDeleter);

routeAd.post('/login' , authHandler.loginHandler);
routeAd.post('/profilCreate', authHandler.registerHandler);

routeAd.post('/catalogue/BankAdder',verifier ,changesHandler.bankCreationHandler);
//abe3t lid fel body ta3 request (kayen corpse ta3 prestation)
routeAd.post('/catalogue/PresAdder' , verifier ,changesHandler.prestationCreationHandler);
routeAd.put('/catalogue/:id' , verifier ,changesHandler.bankUpdateHandler);
//abe3t lid fel body ta3 request (kayen corpse ta3 prestation), the query designed for the DB dosent support tjibo mel URL
routeAd.put('/prestationmodifier', verifier,changesHandler.prestationUpdateHandler);
routeAd.delete('/catalogue/:id',verifier,changesHandler.bankPresDeleterHandler);

routeAd.post('/announce/Create' , verifier ,changesHandler.announceCreationHandler);
routeAd.put('/annouce/Update/:id' , verifier ,changesHandler.announceUpdateHandler);
routeAd.delete('/annouce/Delete/:id',verifier ,changesHandler.announceDeleteHandler);

routeAd.get('/stat',statHandler.statHandlerAdmin);

module.exports = routeAd;