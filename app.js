const express = require('express');
const app = express();
const router = require('./routes/routes.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the API',
    version: '1.0.0',
  });
});

app.use(router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
