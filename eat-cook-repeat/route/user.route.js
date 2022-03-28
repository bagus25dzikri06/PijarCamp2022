const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller/user.controller')

router.get('/', UsersController.getUsers);
router.post('/register', UsersController.register);

module.exports = router;