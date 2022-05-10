const productServices = require('../services/productServices');

const quantityValidation = (req, res, next) => {
  const { quantity } = req.body;
  if (!quantity && quantity !== 0) return res.status(400).json({ message: '"quantity" is required' });
  if (quantity <= 0) {
  return res.status(422).json({ 
    message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const nameValidation = (req, res, next) => {
const { name } = req.body;
if (!name) return res.status(400).json({ message: '"name" is required' });
if (name.length < 5) {
 return res.status(422).json({ 
 message: '"name" length must be at least 5 characters long', 
}); 
}
next();
};

const saleValidation = (req, res, next) => {
req.body.forEach((item) => {
  if (!(item.productId)) return res.status(400).json({ message: '"productId" is required' });
  if (!item.quantity && item.quantity !== 0) {
 return res.status(400).json({ message:
     '"quantity" is required' }); 
}
  if (item.quantity <= 0) {
  return res.status(422).json({ 
    message: '"quantity" must be greater than or equal to 1' });
  }
});
next();
};

const nameDisponibility = async (req, res, next) => {
const { name } = req.body;
const result = await productServices.nameDisponibility(name);
if (!result) {
  return res.status(409).json({ message: 'Product already exists' });
}
next();
};

const idCheck = async (req, res, next) => {
  const { id } = req.params;
  const result = await productServices.idCheck(id);
  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
  };

module.exports = {
  quantityValidation,
  nameValidation,
  saleValidation,
  nameDisponibility,
  idCheck,
}; 