var express = require('express');
var router = express.Router();
const MenuController = require('../controllers/MenuController')

router.post('/create', MenuController.createItem);

router.get('/fetchSingle/:id', MenuController.fetchSingleItem);

router.get('/fetchAll', MenuController.fetchAllItems);

module.exports = router;
