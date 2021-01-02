const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: false, default: ''},
    phone: {type: String, required: false, default: ''},
    date: {type: Date, required: false, default: Date.now()}
});

const ContactsModel = mongoose.model('Contacts',ContactsSchema);

class Contacts{
    
    constructor(body){
        this.body = body;
        this.erros = [];
        this.contacts = null;
    }


}

module.exports = Contacts;