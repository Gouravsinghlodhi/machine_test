'use strict';
const { ErrorHandler, sendGrid } = require('../../../lib/utils');
const Servies = require('../../../models/servies');
const { constants } = require('../../../config');

module.exports = async (req, res) => {
  try {
    let body = req.body.servies;
    console.log(body)
    let Check = await Servies.where({ service_name: body.service_name }).fetch({ require: false });
    if (Check)
      return res.serverError(400, ErrorHandler('servies has already been taken'));

    const servies = await new Servies(body).save();
    return res.success({ servies });
  } catch (error) {
    return res.serverError(500, ErrorHandler(error));
  }
};
