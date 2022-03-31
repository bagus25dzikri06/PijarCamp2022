const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/staticAuth')
const { UsersController } = require('../controller/user.controller')

router.get('/', auth, UsersController.getUsers);
router.get('/check', UsersController.checkUser);
router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.put('/update/:id', UsersController.update);
router.delete('/delete/:id', UsersController.delete);

module.exports = router;