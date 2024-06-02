'use strict';
const { ErrorHandler, sendGrid } = require('../../../lib/utils');
const Categories = require('../../../models/category');
const { constants } = require('../../../config');

module.exports = async (req, res) => {
  try {
    let body = req.body.category;
    let Check = await Categories.where({ category_name: body.category_name }).fetch({ require: false });
    if (Check)
      return res.serverError(400, ErrorHandler('Category has already been taken'));
    body.added_by = req.user.id;
    const category = await new Categories(body).save();
    return res.success({ category });
  } catch (error) {
    return res.serverError(500, ErrorHandler(error));
  }
};
