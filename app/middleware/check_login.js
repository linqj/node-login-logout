let checkLogin = (req, res, next) =>{
    if (req.session.loginUser) {
        //
        next()
    }
    else {
        res.status(401).json({result: false, 'error': 'need login'});
    }
}
module.exports = checkLogin