'use strict';
const { ErrorHandler, awsUtil } = require('../../../lib/utils');
const Servies = require('../../../models/servies');
const constants = require('../../../config/constants');
module.exports = async (req, res, next) => {
    try {
        //Get logged in user
        let cat = await Servies.where({ id: req.params.id }).fetch({ require: false });
        if (!cat)
            return res.serverError(400, ErrorHandler(new Error('Servies not found')));        
        await new Servies().where({ id: req.params.id }).save({ active_status: constants.activeStatus.deleted }, { method: 'update'})
        .then(() => {
            return res.success({'message': 'SubServies deleted successfully'});
        })
        .catch(err => {
            return res.success({'message': 'Something went wrong'});
        })
    } catch (error) {
        console.log('errorrr',error);
        return res.serverError(500, ErrorHandler(error));
    }
};
