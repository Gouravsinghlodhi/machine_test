const bookshelf = require('../config/bookshelf');
require("./users")

const Categories = bookshelf.Model.extend({
    tableName: 'Categories',
    hasTimestamps: true,
    autoIncrement: true,

    addedBy: function () {
        return this.belongsTo("Users", "added_by");
      },
});

module.exports = bookshelf.model('Categories', Categories);