const express = require('express');
//const homeHandler = require('../controllers/homeHandler');
const catalogueHandler = require('../controllers/catalogueHandler');
const diversHandler = require('../controllers/diversHandler');
const statHandler = require('../controllers/statHandler');

const route = express.Router();

//important
route.get('/home', catalogueHandler.announceHandler);
route.get('/catalogue', catalogueHandler.catalogueHandler);
route.get('/catalogue/:id' , catalogueHandler.bankHandler);
route.get('/comparaison/:idb1/:idb2',catalogueHandler.compaHandler);


//divers
route.get('/glossary' , diversHandler.glossaryHandler);
route.get('/contact', diversHandler.contactHandler);
route.get('/apropos', diversHandler.proposHandler);

route.get('/stat',statHandler.statHandlerClient);

route.use((req,res) =>{
    res.status(404).send('Not found')
}) 


module.exports = route;