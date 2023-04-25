const express = require('express');


const homeHandler = (req, res) => {
    res.send('home');
}

module.exports = homeHandler;