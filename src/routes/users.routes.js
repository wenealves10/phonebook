const express = require('express');
const routes = express.Router();
const indexControllers = require('../controllers/indexControllers');
const loginControllers = require('../controllers/loginControllers');

// routes index
routes.get('/',indexControllers);

// routes index
routes.get('/login',loginControllers);

module.exports = routes;