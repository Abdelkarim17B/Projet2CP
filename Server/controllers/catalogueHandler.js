const express = require('express');
const axios = require('axios');
const { client } = require('../models/client');
const getter = require('../models/bank/getBank');
const getterPrestation = require('../models/prestation/getPrestation');
const getterLocation = require('../helpers/getBankLocation');


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
        console.error('Error catalogue Handler', err)
    }
    finally
    {
        console.log('Done catalogue Handler');
    }
}

const bankHandler = async (req,res) => {
    
    const bankId = req.params.id;
    try 
    {
       // await connectDB(client);
        try{
            const resultBank = await getter.getBank(client,bankId);
        }
        catch(err){
            console.log('Error getting Bank', err);
        }
        finally{
            console.log('Done getting Bank');
        }

        try{
            const resultPres = await getterPrestation.getPrestation(client, bankId, categoriesList, typesList);
        }
        catch(err){
            console.log('Error getting prestation', err);
        }
        finally{
            console.log('Done getting prestation');
        }
        
        if (resultBank == null && resultPres == null) {
            console.log('Bank does not exist OR Error Fetching the response');
        }
        else {

            //6vBkPeehGTpplEjJfRJCJyXBkCTpMEp2
            const resultLoc = getterLocation.getBankLocation(resultBank.adresse,process.env.TKEY)
            results = [resultBank, resultPres , resultLoc];
            res.send(JSON.stringify(results));
            console.log('Bank exists But its JSon :', resultBank);
            console.log('Bank prestation But its JSon :', resultPres);
            console.log('Bank location But its JSon :', resultLoc);
            //console.log(process.env.TKEY);
            //console.log('Bank coords are : ', tst);
        }
    }
    catch(err)
    {
        console.error('Error Testing Bank', err)
    }
    finally
    {
        console.log('Done catalogue Handler');
       // await disconnectDB(client);
    }
}

module.exports = {
    catalogueHandler,
    bankHandler
};
