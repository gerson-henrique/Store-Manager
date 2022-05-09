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

const idValidation = (req, res, next) => {
  const { productId } = req.body;
  if (!productId) res.status(400).json({ message: '"productId" is required' });
  next();
  };

module.exports = {
  quantityValidation,
  nameValidation,
  idValidation,
}; 