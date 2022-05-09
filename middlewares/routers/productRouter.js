const express = require('express');
const rescue = require('express-rescue');
const productControllers = require('../../controllers/productControllers');
const productValidations = require('../productValidations');
// const productModel = require('../../models/productModel');

const router = express.Router();

router.get('/', rescue(productControllers.getAll));
router.get('/:id', rescue(productControllers.getById));
router.post('/', productValidations.nameValidation,
productValidations.quantityValidation, rescue(productControllers.setItem));
router.post('/:id', productValidations.nameValidation,
productValidations.quantityValidation, rescue(productControllers.setItem));
module.exports = router;