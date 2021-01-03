const Contacts = require('../models/ContactsModel');
exports.index =  async (req, res) =>{
   try{
      let contacts = await Contacts.contacts(req.session.user);
      const erros = Contacts.errors();
      if(erros.length > 0){
         contacts = [];
         req.flash('errors',errors);
         req.session.save(() => {
             return res.render('index',{contacts});
         });
         return;
      }
        req.session.save(() =>{
         return res.render('index',{contacts});
        });
      
   }catch(err){
      console.log(err);
      res.render('ERROR');
   }
}