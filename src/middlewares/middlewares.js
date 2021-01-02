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