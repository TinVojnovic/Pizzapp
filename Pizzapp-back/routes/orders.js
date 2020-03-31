var express = require('express');
var router = express.Router();
const OrderController = require('../controllers/OrderController')

router.post('/create', OrderController.createOrder);

router.get('/fetchSingle/:id', OrderController.fetchSingleOrder);

router.get('/fetchAll', OrderController.fetchAllOrders);

module.exports = router;
