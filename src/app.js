require('dotenv').config();
const express = require('express');
const carController = require('./controllers/carController');

const app = express();
app.use(express.json());

app.use('/vehicles', carController);

module.exports = app;
