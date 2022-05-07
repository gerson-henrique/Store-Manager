const express = require('express');
const productModel = require('../../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await productModel.getAll();
  res.status(200).json(response);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await productModel.getById(id);
  if (!response) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(response);
});

module.exports = router;