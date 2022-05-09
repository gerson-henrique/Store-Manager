const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();
const getById = async (id) => productModel.getById(id);
const insertProduct = async (name, quantity) => productModel.insertProduct(name, quantity);
const updateProduct = async (id, name, quantity) => productModel.updateProduct(id, name, quantity);
const deleteProduct = async (id) => productModel.deleteProduct(id);
module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  deleteProduct,
};