const saleServices = require('../services/saleServices');

const getAll = async (_req, res) => {
const response = await saleServices.getAll();
res.status(200).json(response);
};

const addSale = async (req, res) => {
  const { body } = req;
  const response = await saleServices.addSale(body);
  res.status(201).json(response);
  };

  const updateSale = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const response = await saleServices.updateSale(body, id);
    res.status(200).json(response);
    };

module.exports = {
  getAll,
  addSale,
  updateSale,
};