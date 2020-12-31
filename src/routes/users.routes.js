const express = require('express');
const routes = express.Router();
const usersControllers = require('../controllers/usersControllers');

routes.get('/',usersControllers);

module.exports = routes;