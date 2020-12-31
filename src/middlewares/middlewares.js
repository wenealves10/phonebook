exports.csurfError = (err, req, res, next) =>{
    if(err && 'EBADCSRFTOKEN' === err.code){
        res.render('ERROR');
    }
}

exports.csurfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}