const express = require('express');
const router = express();
const usersController = require('./../controllers/usersController');

router.get('/profile', usersController.profile);
router.get('/register', usersController.register);
router.get('/login', usersController.login);

module.exports = router;