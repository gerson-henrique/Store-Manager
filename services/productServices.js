const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();
const getById = async (id) => productModel.getById(id);
const insertProduct = async (name, quantity) => productModel.insertProduct(name, quantity);
const updateProduct = async (id, name, quantity) => productModel.updateProduct(id, name, quantity);
const deleteProduct = async (id) => productModel.deleteProduct(id);
const idCheck = async (id) => productModel.idCheck(id);
const nameDisponibility = async (name) => productModel.nameDisponibility(name);
module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  deleteProduct,
  idCheck,
  nameDisponibility,
};