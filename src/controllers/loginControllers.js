const Login = require('../models/LoginModel');
exports.login = (req, res) => {
    if(req.session.user){
        req.flash('errors',`Você precisa sair da conta ${req.session.user.email}`);
        return res.redirect('/');
    }
    return res.render('login');
}

exports.register = async (req, res) => {
   try {
    const login = new Login(req.body);

    await login.register();
    if (login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(() => {
            return res.redirect('/login');
        });
        return;
    }
    req.flash('success','Usuário cadastrado com sucesso!');
    req.session.user = login.user;
    req.session.email = login.user.email;
    req.session.save(() =>{
        return res.redirect('/');
    });
   } catch (error) {
       console.log(error);
       return res.render('ERROR');
   }
}

exports.account = async (req, res) =>{
    try {
        const login = new Login(req.body);
    
        await login.account();
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login');
            });
            return;
        }
      
        req.flash('success','Usuário Logado com sucesso!!!');
        req.session.user = login.user;
        req.session.email = login.user.email;
        req.session.save(() =>{
            return res.redirect('/');
        });

       } catch (error) {
           console.log(error);
           return res.render('ERROR');
       }
}

exports.logout = (req, res) =>{
    req.session.destroy();
    res.redirect('/');
}