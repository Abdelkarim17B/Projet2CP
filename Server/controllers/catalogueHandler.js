const express = require('express');
const { client } = require('../models/client');
const getter = require('../models/bank/getBank');
const getterPrestation = require('../models/prestation/getPrestation');
const getterLocation = require('../helpers/getBankLocation');
const getterAnnounce = require('../models/annonce/getAnnonce');


const categoriesList = ['gestion_de_compte', 'gestion_a_distance', 'option_de_payment', 'moyens_de_payment', 'prets_et_credits', 'placement', 'epargne', 'coffre_fort', 'financement_externe']
const typesList = ['personnel', 'professionnel', 'entreprise']

const catalogueHandler = async (req, res) => {
    try {
    const resultBanks = await getter.getAllBank(client)
    if (resultBanks == null) {
        console.log('Bank does not exist');
    }
    else {
        res.json(resultBanks);
        }
    }
    catch (err) {
        console.error('Error Testing Bank', err)
    }
}

const bankHandler = async (req,res) => {   
    const bankId = req.params.id;
    try 
    {
        const resultBank = await getter.getBank(client,bankId);
        const resultPres = await getterPrestation.getPrestation(client, bankId, categoriesList, typesList);
        if (resultBank == null && resultPres == null) {
            console.log('Bank does not exist OR Error Fetching the response');
        }
        else {
            const resultLoc = getterLocation.getBankLocation(resultBank.adresse,process.env.TKEY)
            results = [resultBank, resultPres , resultLoc];
            res.send(JSON.stringify(results));
            console.log('Bank exists But its JSon :', resultBank);
            console.log('Bank prestation But its JSon :', resultPres);
            console.log('Bank location But its JSon :', resultLoc);
        }
    }
    catch(err)
    {
        console.error('Error Testing Bank', err)
    }
}

const compaHandler = async (req,res) => {
    idbank1 = req.params.idb1;
    idbank2 = req.params.idb2;
    try
    {
        const resultBank1 = await getter.getBank(client,idbank1);
        const resultPres1 = await getterPrestation.getPrestation(client, idbank1, categoriesList, typesList);
        if (resultBank1 == null || resultPres1 == null) {
            console.log('Bank does not exist OR Error Fetching the response');
        }
        else 
        {
            finalResultBank1 = [resultBank1 , resultPres1];
            console.log('Bank exists But its JSon :', finalResultBank1);
        }

    }
    catch(err)
    {
        console.error('Error Testing Bank', err)
    }

    try
    {
        const resultBank2 = await getter.getBank(client, idbank2);
        const resultPres2 = await getterPrestation.getPrestation(client, idbank2, categoriesList, typesList);
        if (resultBank2 == null || resultPres2 == null) {
            console.log('Bank does not exist OR Error Fetching the response');
        }
        else {
            finalResultBank2 = [resultBank2, resultPres2];
            console.log('Bank exists But its JSon :', finalResultBank2);
        }

    }
    catch(err)
    {
        console.error('Error Testing Bank', err)
    }

    finally
    {
        const CompResults =
        {
            Bank1 : finalResultBank1,
            Bank2 : finalResultBank2,
        };

        res.json(CompResults)
    }

    
}


const announceHandler = async(req,res) => {
    try
    {
    const resultsAnnounce = await getterAnnounce.getAllAnnouces(client);
    if(resultsAnnounce == null) 
    {
        console.log('there is no announces');
    }
    else 
    {
        res.json(resultsAnnounce)
    }
    }
    catch(err)
    {
        console.error('Error fetching Announces', err)
    }
}



module.exports = {
    catalogueHandler,
    bankHandler,
    compaHandler,
    announceHandler
};
