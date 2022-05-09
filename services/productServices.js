const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();
const getById = async (id) => productModel.getById(id);
const insertProduct = async (name, quantity) => productModel.insertProduct(name, quantity);

module.exports = {
  getAll,
  getById,
  insertProduct,
};