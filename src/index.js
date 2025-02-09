const express = require('express'),
    bp = require('body-parser');

const app = express(),
    api = require('./api');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


// Mount the API router
app.use('/api', api);


module.exports = app;

