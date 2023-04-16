const express = require('express');

const suggestionHandler = (req, res) => {
    res.send('this is a suggession');
}

//handles '/suggestion/:id'
const choiceHandler = (req, res) => {
    res.send('this is our suggested bank');
}

const resultHandler = (req,res) => {
    res.send('this is it brother');
}

module.exports = {
    suggestionHandler,
    choiceHandler,
    resultHandler
};
