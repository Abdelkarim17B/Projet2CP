const express = require('express');
//const { client } = require('../models/client');
const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');
const getter = require('../models/bank/getBank');
const getterPrestation = require('../models/prestation/getPrestation');
const getterLocation = require('../helpers/getBankLocation');
const getterAnnounce = require('../models/annonce/getAnnonce');



const categoriesList = ['gestion_de_compte', 'gestion_a_distance', 'option_de_payment', 'moyens_de_payment', 'prets_et_credits', 'placement', 'epargne', 'coffre_fort', 'financement_externe']
const typesList = ['personnel', 'professionnel', 'entreprise']

const catalogueHandler = async (req, res) => {
    const working_client = await connectDB();
    try {
        const resultBanks = await getter.getAllBank(working_client)
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
    finally {
        disconnectDB(working_client)
    }

}

const bankHandler = async (req,res) => {   
    const bankId = req.params.id;
    const working_client = await connectDB();
    try 
    {
        const resultBank = await getter.getBank(working_client,bankId);
        const resultPres = await getterPrestation.getPrestation(working_client, bankId, categoriesList, typesList);
        if (resultBank == null && resultPres == null) {
            console.log('Bank does not exist OR Error Fetching the response');
        }
        else {
            //const resultLoc = await getterLocation.getBankLocation(resultBank.adresse,process.env.TKEY)
            results = [resultBank, resultPres];
            res.send(JSON.stringify(results));
            //console.log('Bank exists But its JSon :', resultBank);
            //console.log('Bank prestation But its JSon :', resultPres);
            //console.log('Bank location But its JSon :', resultLoc);
        }
    }
    catch(err)
    {
        console.error('Error Testing Bank', err)
    }
    finally
    {
        disconnectDB(working_client);
    }
}

const compaHandler = async (req,res) => {
    idbank1 = req.params.idb1;
    idbank2 = req.params.idb2;
    const working_client = await connectDB();
    try
    {
        const resultBank1 = await getter.getBank(working_client,idbank1);
        const resultPres1 = await getterPrestation.getPrestation(working_client, idbank1, categoriesList, typesList);
        if (resultBank1 == null || resultPres1 == null) {
            console.log('Bank does not exist OR Error Fetching the response');
        }
        else 
        {
            finalResultBank1 = [resultBank1 , resultPres1];
            //console.log('Bank exists But its JSon :', finalResultBank1);
        }

    }
    catch(err)
    {
        console.error('Error Testing Bank', err)
    }

    try
    {
        const resultBank2 = await getter.getBank(working_client, idbank2);
        const resultPres2 = await getterPrestation.getPrestation(working_client, idbank2, categoriesList, typesList);
        if (resultBank2 == null || resultPres2 == null) {
            console.log('Bank does not exist OR Error Fetching the response');
        }
        else {
            finalResultBank2 = [resultBank2, resultPres2];
            //console.log('Bank exists But its JSon :', finalResultBank2);
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

        res.json(CompResults);
        disconnectDB(working_client)

    }

    
}

const announceHandler = async(req,res) => {
    const working_client = await connectDB();
    try
    {
    const resultsAnnounce = await getterAnnounce.getAllAnnouces(working_client);
    if(resultsAnnounce == null) 
    {
        console.log('there is no announces');
    }
    else 
    {
        res.send(resultsAnnounce)
    }
    }
    catch(err)
    {
        console.error('Error fetching Announces', err)
    }
    finally
    {
        disconnectDB(working_client);
    }
}



module.exports = {
    catalogueHandler,
    bankHandler,
    compaHandler,
    announceHandler
};
