'use strict';

const { admin, user, users } = require('../ACL');
const { getProductById, updateProductById, getByCategory, newProduct, deleteProductById } = require('../Controllers/productController');

const role = require('../middleware/role');
const upload = require('../middleware/upload');

const productRouter = require('express').Router();

productRouter.route('/').post(upload.single('image'),newProduct).get(getByCategory);

productRouter
  .route('/:id')
  .get(getProductById)
  .delete(role(admin), deleteProductById)
  .put(role(admin), updateProductById);
productRouter
  .route('/:id/purchase')
  .put(role(user), (req, res) => res.send('Future Feature!'));
module.exports = productRouter;