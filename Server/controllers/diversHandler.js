const express = require('express');

//handles '/suggestion/:id'
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
    proposHandler
};