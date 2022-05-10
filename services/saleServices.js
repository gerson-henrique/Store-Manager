const saleModel = require('../models/salesModel');

const getAll = async () => saleModel.getAll();
const addSale = async (body) => saleModel.addSale(body);

module.exports = {
  getAll,
  addSale,
};