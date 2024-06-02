'use strict';
const { ErrorHandler } = require('../../../lib/utils');
const { constants } = require('../../../config');
const Servies = require('../../../models/servies');

module.exports = async (req, res,next) => {
    try {

        const ServiesId = req.body.servies.id;
        let Check = await Servies.where({ id: ServiesId }).fetch({ require: false });
        if (!Check)
            return res.serverError(400, ErrorHandler('Servies not found'));

        const body = req.body.servies;
        const servies = await new Servies().where({ id: ServiesId }).save(body, {method: 'update'}); 

        return res.success({servies});
    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
};