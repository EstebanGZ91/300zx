
const express = require('express');
const router = express();
const productsController = require('./../controllers/productsController');
const uploadFile = require('../middlewares/multer');



router.get('/', productsController.detail);

router.get('/edit', productsController.edit);

/* CREACION DE PRODUCTO */
router.get('/create', productsController.create);
router.post('/create',uploadFile.single('imagen'), productsController.store);
/* SECCION ACCESORIOS */
router.get('/accessories', productsController.accessories);
/* SECCION AMPLIFICADOR */
router.get('/amps', productsController.amplifiers);
/* SECCION BAJOS */
router.get('/bass', productsController.bass);
/* SECCION EFECTOS */
router.get('/fx', productsController.fx);
/* SECCION GUITARRAS */
router.get('/guitars', productsController.guitars);
/* SECCION VINTAGE */
router.get('/vintage', productsController.vintage);
/* DETALLE DE PRODUCTO */
router.get('/detail/:id',productsController.detail)


module.exports = router;