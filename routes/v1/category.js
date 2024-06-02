const express = require('express');
const router = express.Router();
const passportMiddleware = require('../../middlewares/passport.middleware');
const joiMiddleware = require('../../middlewares/joi.middleware');
const joiSchemas = require('../../lib/utils/joi.schemas');

const addCategoryComponent = require('../../components/v1/category/add.category');
const deleteCategoryComponent = require('../../components/v1/category/delete.category');
const fetchAllCategoriesComponent = require('../../components/v1/category/fetch.categories');
const updateCategoriesComponent = require('../../components/v1/category/update.category');

router.post('/add', passportMiddleware.jwtAuth,  joiMiddleware.joiBodyMiddleware(joiSchemas.addCategory, 'category'), addCategoryComponent);
router.delete('/:id', passportMiddleware.jwtAuth,  deleteCategoryComponent);
router.get('/categories', passportMiddleware.jwtAuth,  fetchAllCategoriesComponent);

router.put('/:categoryId', passportMiddleware.jwtAuth, joiMiddleware.joiBodyMiddleware(joiSchemas.updateCategory, 'category'), updateCategoriesComponent);

module.exports = router;