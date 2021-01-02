const express = require('express');
const routes = express.Router();
const contactsControllers = require('../controllers/contactsControllers');
const { auth } = require('../middlewares/middlewares');

routes.get('/contacts',auth,contactsControllers.index);

module.exports = routes;