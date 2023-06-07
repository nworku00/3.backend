const { Router } = require('express');
const userController = require('../controllers/user');
const router = Router();

// router.get('/user', userController.showUser)
router.post('/user', userController.createUser)
module.exports =  router