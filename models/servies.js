const bookshelf = require('../config/bookshelf');
require('./users');
require('./category');

const Services = bookshelf.Model.extend({
  tableName: 'services',
  hasTimestamps: true,

  addedBy: function () {
    return this.belongsTo('Users', 'added_by');
  },
  category: function () {
    return this.belongsTo('Categories', 'category_id');
  },
});

module.exports = bookshelf.model('services', Services);
