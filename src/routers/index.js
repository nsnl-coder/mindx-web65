const express = require('express');
const { getAllInventory } = require('../controllers/inventoryController');
const { loginUser } = require('../controllers/userController');
const requireLogin = require('../middleware/requireLogin');
const getAllOrders = require('../controllers/orderController');
const router = express.Router();

// restrict resoure with requireLogin middleware
// router.use(requireLogin);

router.get('/inventory', getAllInventory);
router.post('/auth/login', loginUser);
router.get('/orders', getAllOrders);

module.exports = router;
