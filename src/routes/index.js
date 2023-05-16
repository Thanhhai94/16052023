const login = require('./route/login') 
const userlistjob = require('./route/userlistjob')
const home = require('./route/home')

function route(app) {
    app.use('/login',login)
    app.use('/userlistjob',userlistjob)
    app.use('/home',home)
}

module.exports = route