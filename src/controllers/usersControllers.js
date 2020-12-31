const Users = require('../models/UsersModel');

module.exports = (req, res) =>{
   // res.locals.name
   // req.flash('info',`Olá ${req.session.user.name}`);
   // console.log(req.session.user);
   // console.log(req.flash('info'));
   res.render('index',{users: req.session.user});
}