const Contacts = require('../models/ContactsModel');

exports.index = (req, res) => {
    res.send('Contacts');
}