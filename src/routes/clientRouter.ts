const express = require('express');

const router = express.Router();

import clientController from "../controller/clientController";

router.get('/users', clientController.listClients);
router.post('/users', clientController.createClient);
router.put('/user/:id', clientController.editClient);
router.delete('/user/:id', clientController.deleteClient);

export default router;