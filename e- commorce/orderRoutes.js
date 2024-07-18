const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, orderController.createOrder);
router.get('/:id', protect, orderController.getOrderById);
router.get('/user/:userId', protect, orderController.getOrdersByUser);

module.exports = router;
