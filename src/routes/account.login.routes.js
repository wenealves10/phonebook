const express = require('express');
const routes = express.Router();
const loginControllers = require('../controllers/loginControllers');

// routes of login
routes.get('/login',loginControllers.login);
routes.post('/login/register',loginControllers.register);

module.exports = routes;