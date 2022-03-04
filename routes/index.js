const express = require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');
console.log('router loaded');

router.get('/',userController.logIn);
router.get('/sign-up',userController.signUp);
router.use('/user', require('./user'));
module.exports = router;