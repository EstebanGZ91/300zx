
const express = require('express');
const router = express();
const productsController = require('./../controllers/productsController');
const uploadFile = require('../middlewares/multer');



router.get('/', productsController.detail);

router.get('/edit', productsController.edit);

/* CREACION DE PRODUCTO */
router.get('/create', productsController.create);
router.post('/create',uploadFile.single('imagen'), productsController.store);


router.get('/acc', productsController.accessories);

router.get('/amps', productsController.amplifiers);

router.get('/bass', productsController.bass);

router.get('/fx', productsController.fx);

router.get('/guitars/:id', productsController.detail);

router.get('/vintage', productsController.vintage);

module.exports = router;