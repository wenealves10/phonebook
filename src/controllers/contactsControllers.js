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
        req.flash('success','Sucesso ao cadastra contato!!!');
        req.session.save(() =>{
            return res.redirect('/');
        });
    }catch(error){
        console.log(error);
        return res.render('ERROR');
    }

}

exports.contacts = async (req, res) =>{
    try{
        if(!req.params.id) return res.render('ERROR');
        const contacts = await Contacts.contactsId(req.params.id,req.session.user);
        if(!contacts) return res.render('ERROR');
        req.flash('success','Sucesso ao cadastra contato!!!');
        req.session.save(() =>{
            return res.render('update',{contacts});
        });
    }catch(err){
        console.log(err);
        return res.render('ERROR');
    }
}

exports.update = async (req, res) => {
    try {
        if (!req.params.id) return res.render('ERROR');
        const contactUpdate = new Contacts(req.body,req.session.user);
        await contactUpdate.update(req.params.id);
        if (contactUpdate.errors.length > 0) {
            req.flash('errors', contactUpdate.errors);
            req.session.save(() => {
                return res.redirect(`/contacts/${req.params.id}`);
            });
            return;
        }
        req.flash('success','Atualizado com sucesso!!');
        req.session.save(() =>{
            return res.redirect('/');
        });
    } catch (error) {
        console.log(error);
        return res.render('ERROR');
    }
}

exports.deletes = async (req, res) =>{
    try{
        if(!req.params.id) return res.render('ERROR');
        const contacts = await Contacts.deletes(req.params.id,req.session.user);
        if(!contacts) return res.render('ERROR');
        req.flash('success','Contato apagado com sucesso!!!');
        req.session.save(() =>{
            return res.redirect('/');
        });
    }catch(err){
        console.log(err);
        return res.render('ERROR');
    }
}