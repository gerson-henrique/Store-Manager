const express = require('express');
const rescue = require('express-rescue');
const productControllers = require('../../controllers/productControllers');
const validations = require('../validations');
// const productModel = require('../../models/productModel');

const router = express.Router();

router.get('/', rescue(productControllers.getAll));
router.get('/:id', rescue(productControllers.getById));
 router.post('/', validations.nameValidation,
 validations.quantityValidation, rescue(productControllers.setItem));
 router.put('/:id', validations.nameValidation,
 validations.quantityValidation, rescue(productControllers.setItem));
module.exports = router;