const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');
router.post('/create', userController.create);
router.post('/cs',userController.cs);
module.exports = router;