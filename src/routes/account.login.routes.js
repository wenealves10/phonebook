const express = require('express');
const routes = express.Router();
const loginControllers = require('../controllers/loginControllers');

// routes of login
routes.get('/login',loginControllers.login);
routes.get('/logout',loginControllers.logout);
routes.post('/login/register',loginControllers.register);
routes.post('/login/account',loginControllers.account);

module.exports = routes;