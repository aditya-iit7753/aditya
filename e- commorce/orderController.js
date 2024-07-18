const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { user, products, totalPrice } = req.body;
  try {
    const newOrder = new Order({ user, products, totalPrice });
    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products.product');
    res.json(order);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
