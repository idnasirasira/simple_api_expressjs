const express = require('express');
const productRoutes = require('./productRoutes');

const router = express.Router();

router.use('/api/v1/products', productRoutes);

module.exports = router;
