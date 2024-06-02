'use strict';
const { ErrorHandler } = require('../../../lib/utils');
const SubCategories = require('../../../models/subCategory');
const constants = require('../../../config/constants');

module.exports = async (req, res, next) => {
    try {
        let sub_category = await SubCategories.where({ id: req.params.id, active_status: constants.activeStatus.active }).fetch({ require: false });
        if (!sub_category)
            return res.serverError(400, ErrorHandler(new Error('Invalid SubCategory')));        
        return res.success({ sub_category });

    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
};
