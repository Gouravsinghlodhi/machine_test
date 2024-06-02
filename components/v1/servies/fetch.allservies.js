'use strict';
const { ErrorHandler } = require('../../../lib/utils');
const Services = require('../../../models/servies');
const constants = require('../../../config/constants');

module.exports = async (req, res, next) => {
  try {
    const services = await Services.query((qb) => {
      qb.whereIn('active_status', ['active', 'inactive'])
        .andWhere({ category_id: req.params.id })
        .orderBy('created_at', 'asc');
    }).fetchAll({ require: false });

    const count = services.length;

    return res.status(200).json({ success: true, services, count });
  } catch (error) {
    return res.status(500).json({ success: false, message: ErrorHandler(error) });
  }
};
