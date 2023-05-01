const express = require ('express');
const jwt = require("jsonwebtoken");


const config = process.env;


const verifyToken = (req,res,next) => {
    const token = req.headers.authorization ;

    const options = {
        expiresIn: "24h",
    };

    if (!token)
    {
        return res.status(403).send("A Token is required for authentication");
    }
    try 
    {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token,config.JWT_SECRET_KEY,options)
        req.user = decoded;
         next();
    }
    catch
    {
        return res.status(401).send('Invalid Token');
    }

}


module.exports = verifyToken;