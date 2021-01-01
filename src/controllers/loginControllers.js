const Login = require('../models/LoginModel');
exports.login = (req, res) =>{
    res.render('login');
}

exports.register = (req, res) =>{
    const login = new Login(req.body);
    res.json({email:login.register()});
}