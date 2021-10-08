const express = require('express');
const router = express();
const mainController = require('./../controllers/mainController');

router.get('/API', mainController.api);

module.exports = router;