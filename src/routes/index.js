var express = require('express');
var api = express.Router();
var obj = require('../modules/apiRequest');

api.get('/', (req, res) => {
    console.log(req);
    res.send('This API is up and running.');
})
api.get('/repos', (req, res) => {
    console.log(req);
    res.json(obj);
})

module.exports = api;