const express = require('express');
const statsModel = require('../models/stat/getStat');
const { connectDB } = require('../models/connection/connectDB');
const { disconnectDB } = require('../models/disconnectDatabase');

//handles '/suggestion/:id'

const statsHandler = async (req,res) => {
    const working_client = await connectDB('general');
    try
    {
        const resultStats = await statsModel.getStat(working_client);
        if (resultStats == null)
        {
            console.log('Error retrieveing the stats')
        }
        {
            res.json(resultStats);
        }
    }
    catch(err)
    {
        console.log("An Error occured in the server : " , err)
    }
    finally
    {
        disconnectDB(working_client);
    }
}

const glossaryHandler = (req, res) => {
    res.send('this is the glossary');
}

const contactHandler = (req, res) => {
    res.send('this is the contacts handler');
}

const proposHandler = (req,res) => {
    res.send('this is the a Propos Page');
}

module.exports = {
    glossaryHandler,
    contactHandler,
    proposHandler,
    statsHandler
};