const express = require('express')
const router = express.Router()
const userlistjob = require('../../app/controllers/UserListJobController')

//Định tuyến đường đến userlistjob

router.use('/',userlistjob.userlistjob)

module.exports = router