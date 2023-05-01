const express = require ('express');
const jwt = require("jsonwebtoken");

const config = process.env;


const verifyToken = (req,res,next) => {
    const token = req.headers["x-access-token"];

    if (!token)
    {
        return res.status(403).send("A Token is required for authentication");
    }

    try 
    {
        const decoded = jwt.verify(token,config.JWT_SECRET_KEY)
        req.user = decoded;
    }
    catch
    {
        return res.status(401).send('Inbalid Token');
    }

    return next();
}


module.exports = verifyToken;