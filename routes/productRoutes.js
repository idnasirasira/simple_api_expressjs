const express = require('express');
const productController = require('../controllers/productController.js');

const productRoutes = express.Router();

productRoutes.get('/', productController.getProducts);
productRoutes.post('/', productController.addProduct);
productRoutes.put('/', productController.updateProduct);
productRoutes.delete('/', productController.deleteProduct);

module.exports = productRoutes;
