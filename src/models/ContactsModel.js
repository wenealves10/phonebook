const mongoose = require('mongoose');
const validator = require('validator');

const ContactsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        default: ''
    },
    phone: {
        type: String,
        required: false,
        default: ''
    },
    user_email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ContactsModel = mongoose.model('Contacts',ContactsSchema);

class Contacts{
    
    constructor(body, user){
        this.user = user;
        this.body = body;
        this.errors = [];
        this.contacts = null;
    }

    static async contacts(user){
        let contacts = [];
        if(!user) return  contacts;
         contacts = await ContactsModel.find({user_email: user.email});
        if(!contacts.length > 0) {
            this.errors.push('Nenhum Contatos Cadastro...');
            return;
        }
        return contacts;
    }

    static errors(){
        return this.errors;
    }
    
    async register(){
        this.validate();
        if(this.errors.length > 0) return;
        this.contacts = await ContactsModel.create(this.body);
    }

    validate(){
        this.clearUp();
        if(this.body.email && !validator.default.isEmail(this.body.email)){
            this.errors.push('E-mail inválido!!');
        }
        if(!this.body.name) this.errors.push('É necessário o nome!!');
        if(!this.body.email && !this.body.phone) this.errors.push('É necessário pelo um contato!! E-mail ou Telefone');
    } 

    clearUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body = '';
            }
        }

        this.body = {
            name:this.body.name,
            email:this.body.email,
            phone:this.body.phone,
            user_email: this.user.email
        }
    }
}

module.exports = Contacts;