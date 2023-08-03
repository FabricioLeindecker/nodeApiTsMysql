const express = require('express');

const router = express.Router();

import cartController from "../controller/cartController";

router.get('/carts', cartController.listCarts);
router.post('/cart', cartController.createCart);
router.put('/cart/:id', cartController.editCart);
router.delete('/cart/:id', cartController.deleteCart);

///////
router.get('/all/:id', cartController.listAll);
/////

export default router;