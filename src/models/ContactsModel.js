const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    phone: {type: String, required: false}
});

const ContactsModel = mongoose.model('Contacts',ContactsSchema);

class Contacts{

}

module.exports = Contacts;