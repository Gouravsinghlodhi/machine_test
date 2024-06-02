'use strict';
const {
    ErrorHandler
} = require('../../../lib/utils');
const passport = require('passport');
const User = require('../../../models/users');
const {
    constants
} = require('../../../config');

module.exports = async (req, res, next) => {
    try {
        let user = await User.where({
            email: req.body.user.email,
            active_status: constants.activeStatus.active
        }).fetch({
            require: false
        });

        if (!user)
            return res.serverError(422, ErrorHandler(new Error(constants.error.auth.invalidCredentials)));

        passport.authenticate('local', async (err, data, info) => {
            if (err) {
                return res.serverError(400, ErrorHandler(err));
            }
            return res.success(data);
        })(req, res);
    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
};