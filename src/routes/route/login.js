const express = require('express')
const router = express.Router()
const loginController = require('../../app/controllers/LoginController')

//Định tuyến đường đến login

router.get('/',loginController.login)

router.post('/',loginController.loginPost)

module.exports = router