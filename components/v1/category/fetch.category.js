'use strict';
const { ErrorHandler } = require('../../../lib/utils');
const Categories = require('../../../models/category');
const constants = require('../../../config/constants');

module.exports = async (req, res, next) => {
    try {
        let category = await Categories.where({ id: req.params.id, active_status: constants.activeStatus.active }).fetch({ require: false });
        if (!category)
            return res.serverError(400, ErrorHandler(new Error('Invalid Category')));        
        return res.success({ category });

    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
};
