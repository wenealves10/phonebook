const express = require('express');
const routes = express.Router();
const indexControllers = require('../controllers/indexControllers');


// routes users
routes.get('/',indexControllers.index);
module.exports = routes;