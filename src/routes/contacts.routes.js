const express = require('express');
const routes = express.Router();
const contactsControllers = require('../controllers/contactsControllers');

routes.get('/contacts',contactsControllers.index);

module.exports = routes;