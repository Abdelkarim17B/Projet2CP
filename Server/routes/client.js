const express = require('express');
const homeHandler = require('../controllers/homeHandler');
const catalogueHandler = require('../controllers/catalogueHandler');
const suggeHandler = require('../controllers/suggessHandler');
const comparaisonHandler = require('../controllers/comparaisonHandler');
const diversHandler = require('../controllers/diversHandler');
const route = express.Router();

route.get('/home', homeHandler);

route.get('/catalogue', catalogueHandler.cataloguehandler);
route.get('/catalogue/:id' , catalogueHandler.bankhandler);

route.get('/suggestion', suggeHandler.suggestionHandler);
route.get('/suggestion/:id' , suggeHandler.choiceHandler);
route.get('/suggestion/result' , suggeHandler.resultHandler);

route.get('/comparaison',comparaisonHandler);

route.get('/map' , diversHandler.mapHandler);
route.get('/glossary' , diversHandler.glossaryHandler);
route.get('/contact', diversHandler.contactHandler);
route.get('/apropos', diversHandler.proposHandler);



module.exports = route;