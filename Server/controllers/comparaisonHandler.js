const express = require('express');


const compHandler = (req, res) => {
    res.send('this is the comp page');
}

module.exports = compHandler;