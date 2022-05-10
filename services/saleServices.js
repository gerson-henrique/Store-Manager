const saleModel = require('../models/salesModel');

const getAll = async () => saleModel.getAll();
const addSale = async (body) => saleModel.addSale(body);
const updateSale = async (body, id) => saleModel.updateSale(body, id);

module.exports = {
  getAll,
  addSale,
  updateSale,
};