const products = require('../data/products');

exports.getProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'List of products',
    data: products,
  });
};

exports.addProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide name and price',
    });
  }

  const id = products.length === 0 ? 1 : products[products.length - 1].id + 1;

  const newProduct = { id, name, price };
  products.push(newProduct);

  res.status(201).json({
    status: 'success',
    message: 'Product added',
    data: newProduct,
  });
};

exports.updateProduct = (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide id, name and price',
    });
  }

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: `Product with ID ${id} not found`,
    });
  }

  products[index] = { id, name, price };

  res.status(200).json({
    status: 'success',
    message: 'Product updated',
    data: products[index],
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.body;
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: `Product with ID ${id} not found`,
    });
  }

  products.splice(index, 1);

  res.status(200).json({
    status: 'success',
    message: `Product ${id} deleted`,
  });
};
