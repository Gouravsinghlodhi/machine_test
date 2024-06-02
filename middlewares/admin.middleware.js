const  constants  = require('../config/constants');
const { ErrorHandler } = require('../lib/utils');

module.exports.adminAccess = () => {
    return async (req, res, next) => {
        const userRole = req.user.role;
        console.log()
        if (userRole === 'admin' || userRole === 'librarian') {
            next();
        } else {
            return res.serverError(400, ErrorHandler(new Error(constants.error.accessDenied)));
        }
    };
};