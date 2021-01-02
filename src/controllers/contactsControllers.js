const Contacts = require('../models/ContactsModel');

exports.index = (req, res) => {
    res.render('contacts');
}

exports.register = async (req, res) =>{
    res.json({contacts:req.body});
}