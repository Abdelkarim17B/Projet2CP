const express = require('express');
const { client } = require('../models/client');
const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');
const getter = require('../models/bank/getBank');

const catalogueHandler = (req, res) => {
    res.send('catalogue');
}

const bankHandler = async (req,res) => {
    res.send('ur seeing a bank');
    const bankId = req.params.id;
    try 
    {
        await connectDB(client);
        const resultBank = await getter.getBank(client,bankId)
        if(resultBank == null) {
            console.log('Bank does not exist');
        }
        else {
            console.log('Bank exists :', resultBank);
        }
    }
    catch(err)
    {
        console.error('Error Testing Bank', err)
    }
    finally
    {
        await disconnectDB(client);
    }

    

}


module.exports = {
    catalogueHandler,
    bankHandler
};
