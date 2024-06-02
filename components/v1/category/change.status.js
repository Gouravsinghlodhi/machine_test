'use strict';
const { ErrorHandler } = require('../../../lib/utils');
const { constants } = require('../../../config');
const Categories = require('../../../models/category');

module.exports = async (req, res,next) => {
    try {

        const categoryId = req.body.category.id;
        let Check = await Categories.where({ id: categoryId }).fetch({ require: false });
        if (!Check)
            return res.serverError(400, ErrorHandler('Category not found'));

        const body = req.body.category;
        const category = await new Categories().where({ id: categoryId }).save(body, {method: 'update'}); 

        return res.success({category});
    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
};