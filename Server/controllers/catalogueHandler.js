const express = require('express');

const cataloguehandler = (req, res) => {
    res.send('catalogue');
}

const bankhandler = (req,res) => {
    res.send('ur seeing a bank');
}


module.exports = {
    cataloguehandler,
    bankhandler
};
