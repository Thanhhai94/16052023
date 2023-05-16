const express = require('express')
const router = express.Router()
const homeController = require('../../app/controllers/HomeController')

//Định tuyến đường đến login

router.get('/',homeController.home)


module.exports = router

