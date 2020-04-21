let orm = require('../config/orm');

let burger = {
    selectAll: function (cb) {
        orm.selectAll(cb);
    },
    createOne: function (burger_name, cb) {
        orm.createOne(burger_name, cb);
    },
    updateOne: function (id, cb) {
        orm.updateOne(id, cb);
    },
    deleteOne: function (id, cb) {
        orm.deleteOne(id, cb);
    }
};

module.exports = burger;