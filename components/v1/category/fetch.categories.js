'use strict';
const {
    ErrorHandler    
} = require('../../../lib/utils');
const Categories = require('../../../models/category');
const constants = require('../../../config/constants');

module.exports = async (req, res, next) => {
    try {
       
        let categories = await Categories.where({
            active_status: constants.activeStatus.active,
        }).fetchAll();
        const count = await Categories.where({
            active_status: constants.activeStatus.active,
        }).count();
        return res.success({
            categories,count
        });

    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
};