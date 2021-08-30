const express = require('express');
const router = express();
const productsController = require('./../controllers/productsController');

router.get('/', productsController.detail);
router.get('/edit', productsController.edit);
router.get('/create', productsController.create);

module.exports = router;