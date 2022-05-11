const productServices = require('../services/productServices');

const getAll = async (_req, res) => {
const response = await productServices.getAll();  
return res.status(200).json(response);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await productServices.getById(id);
  if (!response) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(response); 
};

const setProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const result = await productServices.insertProduct(name, quantity);
  return res.status(201).json(result);
};

const attProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const result = await productServices.updateProduct(id, name, quantity);
  return res.status(200).json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await productServices.deleteProduct(id);
  return res.status(204).json(result);
};

module.exports = {
  getAll,
  getById,
  setProduct,
  attProduct,
  deleteProduct,
};