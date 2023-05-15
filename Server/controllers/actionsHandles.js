const express = require('express');
const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');

const bankCreator = require('../models/bank/createBank');
const bankUpdater = require('../models/bank/updateBank');
const bankDeleter = require('../models/bank/deleteBank');

const prestetationAdder = require('../models/prestation/createPrestation');
const prestetationUpdater = require('../models/prestation/updatePrestation');
const prestationDeleter = require('../models/prestation/deletePrestation');

const announceCreator = require('../models/annonce/createAnnonce')
const annouceUpdater = require('../models/annonce/updateAnnonce');
const announceDeleter = require('../models/annonce/deleteAnnonce');

const getterPrestation = require('../models/prestation/getPrestation');

const categoriesList = ['gestion_de_compte', 'gestion_a_distance', 'option_de_payment', 'moyens_de_payment', 'prets_et_credits', 'placement', 'epargne', 'coffre_fort', 'financement_externe']
const typesList = ['personnel', 'professionnel', 'entreprise']

const {prestationObjectConstructor} = require('../helpers/prestationObjContructor.js');

const bankCreationHandler = async (req, res) => {
    const client = await connectDB();
    const bankObject = req.body;
    try {
        const bank = await bankCreator.createBank(client,bankObject);
        res.sendStatus(201).json(bank)
    }
    catch (err) {
        console.log("there has been an error creating the bank", err);
    }
    finally {
        disconnectDB(client);
    }
}

const prestationCreationHandler = async (req,res) => {
    const client = await connectDB();
    const creationObject = prestationObjectConstructor(req.body.id_banque,['gestion_de_compte', 'gestion_a_distance', 'option_de_payment', 'moyens_de_payment', 'prets_et_credits', 'placement', 'epargne', 'coffre_fort', 'financement_externe'],['personnel','professionnel', 'entreprise'],req.body);
    console.log(creationObject);
    try
    {
        const newPres = await prestetationAdder.createPrestation(client,creationObject,categoriesList,typesList);
        res.sendStatus(201).json(newPres)
    }
    catch(err)
    {
        console.log('There was an error' , err);
    }
    finally
    {
        disconnectDB(client);
    }
}

const bankUpdateHandler = async (req,res) => {
    const client = await connectDB();
    const bankID = req.params.id;
    const update = req.body;
    try
    {
        const bank = await bankUpdater.updateBank(client,bankID,update);
        res.send('Done Updating')
    }
    catch(err)
    {
        console.log('this is an error' , err);
        res.sendStatus(500);
    }
    finally 
    {
        disconnectDB(client);
    }
    
}

const prestationUpdateHandler = async (req,res) => {
    const client = await connectDB();
    //const bankID = req.params.body.id_banque;
    const update = prestationObjectConstructor(req.body.id_banque,['gestion_de_compte', 'gestion_a_distance', 'option_de_payment', 'moyens_de_payment', 'prets_et_credits', 'placement', 'epargne', 'coffre_fort', 'financement_externe'],['personnel','professionnel', 'entreprise'],req.body);
    try
    {
        const updater = await prestetationUpdater.updatePrestation(client,update,categoriesList,typesList);
        res.send('Done')
    }
    catch(err)
    {
        console.log("there was an error" , err);
        res.sendStatus(500);
    }
    finally
    {
        disconnectDB(client);
    }

}

const bankPresDeleterHandler = async (req,res) => {
    const client = await connectDB();
    const bankID = req.params.id;
    try
    {
        const noPres = await prestationDeleter.deletePrestation(client,bankID,categoriesList);
        const nobank = await bankDeleter.deleteBank(client,bankID);
        res.send('bank and prestation deleted')
    }
    catch(err)
    {
        console.log("there was a probelm with the delete" , err);
    }
    finally
    {
        disconnectDB(client);
    }
}


const announceCreationHandler = async (req,res) => {
    const client = await connectDB();
    const announceObject = req.body;
    try
    {
        const announce = await announceCreator.createAnnonce(client,announceObject);
        res.sendStatus(201).json(announce);
    }
    catch(err)
    {
        console.log("there has been errors creating the announce")
    }
    finally
    {
        disconnectDB(client);
    }
}

const announceUpdateHandler = async(req,res) => {
    const client = await connectDB();
    const announceObject = req.body;
    const idAnnounce = req.params.id;
    console.log("THE ID : ",idAnnounce);
    console.log("The object : ",req.body);
    try {
        const announce = await annouceUpdater.updateAnnonce(client,idAnnounce,announceObject);
        res.send("Done Updating");
    }
    catch (err) {
        console.log("there has been errors updating the announce")
    }
    finally {
        disconnectDB(client);
    }   
}



const announceDeleteHandler = async(req,res) => {
    const client = await connectDB();
    const announceID = req.params.id;
    try {
        const deleter = await announceDeleter.deleteAnnonce(client, announceID);
        res.send('admin deleted');
    }
    catch (err) {
        console.log("this is an error", err);
        res.sendStatus(500);
    }
    finally {
        disconnectDB(client);
    }

}



module.exports = {
    bankCreationHandler,
    bankUpdateHandler,
    prestationUpdateHandler,
    prestationCreationHandler,
    bankPresDeleterHandler,
    announceCreationHandler,
    announceDeleteHandler,
    announceUpdateHandler
}