const express = require('express');
const axios = require('axios');
const { client } = require('../models/client');
const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');
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
        console.log('Bank exists :', resultBanks);
        res.json(resultBanks);
        }
    }
    catch (err) {
        console.error('Error Testing Bank', err)
    }
    finally
    {
        // await disconnectDB(client);
    }
}

const bankHandler = async (req,res) => {
    
    const bankId = req.params.id;
    try 
    {
       // await connectDB(client);
        const resultBank = await getter.getBank(client,bankId);
        const resultPres = await getterPrestation.getPrestation(client, bankId, categoriesList, typesList);
        if (resultBank == null && resultPres == null) {
            console.log('Bank does not exist OR Error Fetching the response');
        }
        else {

            //6vBkPeehGTpplEjJfRJCJyXBkCTpMEp2
            const tst = getterLocation.getBankLocation(resultBank.adresse,process.env.TKEY)
            results = [resultBank, resultPres]
            res.send(JSON.stringify(results));
            console.log('Bank exists But its JSon :', resultBank);
            //console.log(process.env.TKEY);
            console.log('Bank coords are : ', tst);
        }
    }
    catch(err)
    {
        console.error('Error Testing Bank', err)
    }
    finally
    {
       // await disconnectDB(client);
    }
}

module.exports = {
    catalogueHandler,
    bankHandler
};
