const quantityValidation = (req, res, next) => {
  const { quantity } = req.body;
  if (!quantity && quantity !== 0) res.status(400).json({ message: '"quantity" is required' });
  if (quantity <= 0) {
   res.status(422).json({ 
    message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const nameValidation = (req, res, next) => {
const { name } = req.body;
if (!name) res.status(400).json({ message: '"name" is required' });
if (name.length < 5) {
 res.status(422).json({ 
 message: '"name" length must be at least 5 characters long', 
}); 
}
next();
};

const saleValidation = (req, res, next) => {
req.body.forEach((item) => {
  if (!(item.productId)) res.status(400).json({ message: '"productId" is required' });
  if (!item.quantity && item.quantity !== 0) {
 res.status(400).json({ message:
     '"quantity" is required' }); 
}
  if (item.quantity <= 0) {
   res.status(422).json({ 
    message: '"quantity" must be greater than or equal to 1' });
  }
});
next();
};

module.exports = {
  quantityValidation,
  nameValidation,
  saleValidation,
}; 