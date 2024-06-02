const bookshelf = require('../config/bookshelf');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { bcryptConfig } = require('../config');

const User = bookshelf.Model.extend({
    tableName: 'Users',
    hasTimestamps: true,
    autoIncrement: true,
    initialize: function () {
        this.on('saving', function (model, attributes, options) {

            if (attributes.password && this.hasChanged()) {
                attributes.password = bcrypt.hashSync(attributes.password, bcryptConfig.hashRound);
            }
           
        });
        this.on('fetched', async function (model, attributes, options) {

            //Relations helper
            if (model.relations) {
                const obj = model.relations;
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        model.attributes[key] = model.related(key).toJSON();
                    }
                }
            }

        });
        this.on('fetched:collection', async function (model, attributes, options) {
           
        });
    }
});

User.prototype.toJSON = function () {
    const that = this.attributes;
    return _.omit(that, ['password']);
};


module.exports = bookshelf.model('User', User);