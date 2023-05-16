const userLogin = require('../../models/username')

exports.login = (req,res,next) => {
    res.render('login', {
        pageTitle: 'LOGIN'
    })
}

exports.loginPost = (req,res,next) => {
    console.log(req.body)
    if(req.body.username == userLogin.username && req.body.password == userLogin.password) {
        res.render('userlistjob') , {pageTitle: 'LOGIN'}
    }
    else {
        res.render('login')
    }
}