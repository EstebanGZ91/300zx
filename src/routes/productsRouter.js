const express = require('express');
const router = express();
const productsController = require('./../controllers/productsController');

router.get('/', productsController.detail);
router.get('/edit', productsController.edit);
router.get('/create', productsController.create);
router.get('/acc', productsController.accessories);
router.get('/amps', productsController.amplifiers);
router.get('/bass', productsController.bass);
router.get('/fx', productsController.fx);
router.get('/guitars', productsController.guitars);
router.get('/vintage', productsController.vintage);

module.exports = router;