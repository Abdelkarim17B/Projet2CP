const express = require('express');
const { client } = require('../models/client');
const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');
const getter = require('../models/bank/getBank');

const catalogueHandler = async (req, res) => {
    try {
    //await connectDB(client);
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
    finally {
        //await disconnectDB(client);
    }
}

const bankHandler = async (req,res) => {
    
    const bankId = req.params.id;
    try 
    {
        //await connectDB(client);
        const resultBank = await getter.getBank(client,bankId)
        if(resultBank == null) {
            console.log('Bank does not exist');
        }
        else {
            res.json(resultBank);
            console.log('Bank exists But its JSon :', resultBank);
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
