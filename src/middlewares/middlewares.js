exports.csurfError = (err, req, res, next) =>{
    if(err){
        res.render('ERROR');
    }
    next();
}

exports.csurfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}