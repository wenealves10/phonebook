const Contacts = require('../models/ContactsModel');

exports.index = (req, res) => {
    res.render('contacts');
}

exports.register = async (req, res) => {
    try {
        const contacts = new Contacts(req.body,req.session.user);
        await contacts.register();
        if (contacts.errors.length > 0) {
            req.flash('errors', contacts.errors);
            req.session.save(() => {
                return res.redirect('/contacts');
            });
            return;
        }
        req.flash('success','Sucesso ao Cadastra!!!');
        req.session.save(() =>{
            return res.redirect('/contacts');
        });
    }catch(error){
        console.log(error);
        return res.render('ERROR');
    }

}