const express = require('express');
const routes = express.Router();
const contactsControllers = require('../controllers/contactsControllers');
const { auth } = require('../middlewares/middlewares');

routes.get('/contacts',auth,contactsControllers.index);
routes.post('/contacts/register',auth,contactsControllers.register);

module.exports = routes;