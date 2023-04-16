const express = require('express');

const mapHandler = (req, res) => {
    res.send('this is the map');
}

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
    mapHandler,
    glossaryHandler,
    contactHandler,
    proposHandler
};