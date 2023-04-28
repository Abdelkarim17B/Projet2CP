const express = require('express');
const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');
const { create } = require('../models/admin/createAdmin');
const { getAdminByEmail } = require('../models/admin/getAdminByEmail');

const loginHandler = async (req, res) => {

    const email = req.body.email;
    const password = req.body.mot_de_passe;
    const client = await connectDB();
    try {
        if (!req.body || !email || !password) {
            return res.status(400).json({ message: 'Invalid request' });
        }
        const admin = await getAdminByEmail(client, email);
        if (admin && admin.mot_de_passe === password) {
            res.status(200).json({ message: 'Logged in successfully!' });
        }
        else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    }
    catch (err) {
        console.error('Error logging in', err);
        res.status(500).json({ message: 'Internal server error' });
    }
    finally {
        await disconnectDB(client);
    }
}

module.exports = { 
    loginHandler 
};