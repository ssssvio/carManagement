const app = express();
const express = require('express');
const carController = require('./controllers/carController');

app.use(express.json());
app.use('/cars', carController);

module.exports = app;
