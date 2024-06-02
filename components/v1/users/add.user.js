'use strict';

const { ErrorHandler, sendGrid } = require('../../../lib/utils');
const User = require('../../../models/users');
const { constants } = require('../../../config');

module.exports = async (req, res) => {
  try {
    const userBody = req.body.user;

    // Check if user already exists
    const userCheck = await User.where({ email: userBody.email }).fetch({ require: false });
    if (userCheck) {
      return res.status(400).json({ error: ErrorHandler(constants.error.auth.emailTaken) });
    }

    // Save new user
    const user = await new User(userBody).save();
    return res.status(201).json({ user });

  } catch (error) {
    // Handle any other errors
    return res.status(500).json({ error: ErrorHandler(error) });
  }
};
