'use strict';
const { ErrorHandler, awsUtil } = require('../../../lib/utils');
const Categories = require('../../../models/category');
const constants = require('../../../config/constants');
module.exports = async (req, res, next) => {
    try {
        //Get logged in user
        let cat = await Categories.where({ id: req.params.id }).fetch({ require: false });
        if (!cat)
            return res.serverError(400, ErrorHandler(new Error('Category not found')));        
        await new Categories().where({ id: req.params.id }).save({ active_status: constants.activeStatus.deleted }, { method: 'update'})
        .then(() => {
            return res.success({'message': 'Category deleted successfully'});
        })
        .catch(err => {
            return res.success({'message': 'Something went wrong'});
        })
    } catch (error) {
        console.log('errorrr',error);
        return res.serverError(500, ErrorHandler(error));
    }
};
