const Contacts = require('../models/ContactsModel');
exports.index =  async (req, res) =>{
   try{
      let contacts = await Contacts.contacts(req.session.user);
        req.session.save(() =>{
         return res.render('index',{contacts});
        });
      
   }catch(err){
      console.log(err);
      res.render('ERROR');
   }
}