const express = require('express');
const routes = express.Router();
const contactsControllers = require('../controllers/contactsControllers');
const { auth } = require('../middlewares/middlewares');

routes.get('/contacts',auth,contactsControllers.index);
routes.get('/contacts/:id',auth,contactsControllers.contacts);
routes.get('/contacts/delete/:id',auth,contactsControllers.deletes);
routes.post('/contacts/register',auth,contactsControllers.register);
routes.post('/contacts/:id',auth,contactsControllers.update);

module.exports = routes;