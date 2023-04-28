const express = require('express');
const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');

const admincreator = require('../models/admin/createAdmin');
const adminGetter = require('../models/admin/getAdmin');
const adminModif = require('../models/admin/updateAdmin')
const adminDeleter= require('../models/admin/deleteAdmin');



const profileReader = async (req,res) => {
    const client = await connectDB();
    const adminID = req.params.id;
    try 
    {  
        const admin = await adminGetter.getAdmin(client , adminID);
        if(admin == null) 
        {
            console.log('there is no admin with this ID')
            res.sendStatus(404)
        }
        else 
        {
            res.json(admin);
            console.log('i am the best = ' , admin)
        }
    }
    catch(err)
    {
        console.log("there has been an error fetching the admin" , err);
    }
    finally
    {
        disconnectDB(client);
    }
}

const profileCreator = async (req,res) => {
    const client = await connectDB();
    const creationObject = req.body;

    try 
    {
        const admin = await admincreator.createAdmin(client,creationObject);
        res.send('admin created')
    }
    catch(err)
    {
        console.log("this is an error" , err)
        res.sendStatus(500);
    }
    finally
    {
        disconnectDB(client);
    }

}

const profileModifier = async (req,res) => 
{
    const client = await connectDB();
    const adminID = req.params.id;
    const update = req.body;
    //console.log(update);
    try 
    {
        const admin = await adminModif.updateAdmin(client,adminID,update);
    }
    catch(err)
    {
        console.log("this is an error" , err)
        res.sendStatus(500);
    }
    finally 
    {
        disconnectDB(client)
    }

}

const profileDeleter = async (req,res) => {

    const client = await connectDB();
    const adminID = req.params.id;
    try
    {
        const admin = await adminDeleter.deleteAdmin(client,adminID);
        res.send('admin deleted');
    }
    catch (err)
    {
        console.log("this is an error" , err);
        res.sendStatus(500);
    }
    finally 
    {
        disconnectDB(client);
    }
}



module.exports = {
    profileReader,
    profileCreator, 
    profileModifier,
    profileDeleter
};