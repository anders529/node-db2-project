const express = require('express');
const carsRouter = require('./cars/carsRouter.js');
const helmet = require('helmet');
const server = express();
server.use(helmet());
server.use('/api/cars', carsRouter);
server.use(express.json());
module.exports = server;