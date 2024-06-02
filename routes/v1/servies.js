const express = require('express');
const router = express.Router();
const passportMiddleware = require('../../middlewares/passport.middleware');
const joiMiddleware = require('../../middlewares/joi.middleware');
const joiSchemas = require('../../lib/utils/joi.schemas');

const addserviesCategoryComponent = require('../../components/v1/servies/add.servies');
const deleteSubCategoryComponent = require('../../components/v1/servies/delete.servies');
const fetchAllSubCategoriesComponent = require('../../components/v1/servies/fetch.allservies');
const updateSubCategoriesComponent = require('../../components/v1/servies/update.servies');

router.post('/add', passportMiddleware.jwtAuth,  joiMiddleware.joiBodyMiddleware(joiSchemas.addServies, 'servies'), addserviesCategoryComponent);
router.delete('/categoryId/:id', passportMiddleware.jwtAuth,  deleteSubCategoryComponent);
router.get('/categoryId/:id', passportMiddleware.jwtAuth,  fetchAllSubCategoriesComponent);
router.put('/service', passportMiddleware.jwtAuth, updateSubCategoriesComponent);

module.exports = router;