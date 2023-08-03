const express = require('express');

const router = express.Router();

import productController from "../controller/productsController";

router.get('/products', productController.listProducts);
router.post('/product', productController.createProduct);
router.put('/product/:id', productController.editProduct);
router.delete('/product/:id', productController.deleteProduct);

export default router;