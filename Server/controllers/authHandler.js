const express = require('express');
const { connectDB } = require('../models/connectDatabase');
const { disconnectDB } = require('../models/disconnectDatabase');
const admincreator = require('../models/admin/createAdmin');
const { getAdminByEmail } = require('../models/admin/getAdminByEmail');

const jwt = require("jsonwebtoken");

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
            const payload = {email:admin.email , role:'admin' , };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: "2h"});
            res.status(200).json({ message: 'Logged in successfully!' , JWTtoken : token });
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

const registerHandler = async (req, res) => {

    const client = await connectDB();
    
    const creationObject = req.body;
    const email = req.body.email
    try {
        // const nom = req.body && req.body.nom;
        // const prenom = req.body && req.body.prenom;
        // const occupation = req.body && req.body.occupation;
        // const email = req.body && req.body.email;
        // const password = req.body && req.body.mot_de_passe;

        // On vérifie si l'adresse email est déjà utilisée
        const existingAdmin = await getAdminByEmail(client,email);
        if (existingAdmin) {
            return res.status(409).json({ message: 'L\'adresse email est déjà utilisée.' });
        }
        //Si l'adresse email n'existe pas, on hash le mot de passe
        // const hashedPassword = await hash(password, 10);
        // const newAdmin = {
        //     id_admin, //????
        //     nom: nom,
        //     prenom: prenom,
        //     email: email,
        //     mot_de_passe: hashedPassword,
        //     cle_speciale, //?????
        //     occupation: occupation,
        // };
        const admin = await admincreator.createAdmin(client, creationObject);
        return res.status(201).json(admin);
    } 
    catch (error) 
    {
        console.error(error);
        return res.status(500).json({ message: 'Erreur lors de la création du compte admin.' });
    }
    finally 
    {
        await disconnectDB(client);
    }
};

module.exports = { 
    loginHandler,
    registerHandler
};