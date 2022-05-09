const productServices = require('../services/productServices');

const getAll = async (_req, res) => {
const response = await productServices.getAll();
res.status(200).json(response);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await productServices.getById(id);
  if (!response) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(response); 
};

const setItem = async (req, res) => {
 res.status(200).json({ podCOladog: req.body });
};

module.exports = {
  getAll,
  getById,
  setItem,
};