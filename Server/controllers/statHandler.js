const express = require('express');

const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');

const { getStatAdmin } = require('../models/stat/getStatAdmin.js');
const { getStatClient } = require('../models/stat/getStatClient.js');



const statHandlerAdmin = async (req, res) => {
    const client = await connectDB();
    // log(client);
    try{
        const stat = await getStatAdmin(client);
        console.log(stat);
        res.send(stat);
    }
    catch(err){
        console.error('Error getting stat', err);
        return res.status(500).json({ message: 'Erreur getting Banky stats' });
    }
    finally{
        await disconnectDB(client);
    }
}

const statHandlerClient = async (req, res) => {
    const client = await connectDB();
    // log(client);
    try{
        const stat = await getStatClient(client);
        console.log(stat);
        res.send(stat);
    }
    catch(err){
        console.error('Error getting stat', err);
        return res.status(500).json({ message: 'Erreur getting Banky stats' });
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {
    statHandlerAdmin,
    statHandlerClient
};