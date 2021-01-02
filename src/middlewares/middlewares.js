exports.csurfError = (err, req, res, next) =>{
    if(err){
        res.render('ERROR');
    }
    next();
}

exports.csurfMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.auth = (req, res, next) =>{
    if(!req.session.user){
        req.flash('errors','Somente usuários com conta podem acessar!!');
        req.session.save(() =>{
          res.redirect('/login');
        });
        return;        
    }else{
        next();
    }
}