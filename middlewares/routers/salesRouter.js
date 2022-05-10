const express = require('express');
const rescue = require('express-rescue');
const salesModel = require('../../models/salesModel');
const validations = require('../validations');
const saleControllers = require('../../controllers/saleControllers');

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await salesModel.getAll();
  res.status(200).json(response);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await salesModel.getById(id);
  if (!response[0]) return res.status(404).json({ message: 'Sale not found' });

  res.status(200).json(response);
});

router.post('/', 
validations.saleValidation,
 rescue(saleControllers.addSale));

router.put('/:id', 
validations.saleValidation,
rescue(saleControllers.setItem));

module.exports = router;