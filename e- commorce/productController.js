const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const newProduct = new Product({ name, description, price, quantity });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.updateProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { name, description, price, quantity }, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Product removed' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};
