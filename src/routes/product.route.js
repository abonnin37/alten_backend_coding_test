const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

const auth = require('../middlewares/auth.middleware');

router.get('/', productController.getProducts);

router.get('/:id', auth, productController.getProduct);

router.post('/', auth, productController.postProduct);

router.put('/:id', auth, productController.putProduct);

router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;