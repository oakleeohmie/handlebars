let connection = require('./connection');

var orm = {
    selectAll: function (cb) {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    createOne: function (burger_name, cb) {
        let queryString = "INSERT INTO burgers (burger_name) VALUES(?);";
        connection.query(queryString, [burger_name], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function (id, cb) {
        let queryString = "UPDATE burgers SET devoured = 1  WHERE id = ?;";
        connection.query(queryString, [id], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    deleteOne: function (id, cb) {
        let queryString = "DELETE FROM burgers WHERE id = ?";
        connection.query(queryString, [id], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }

};

module.exports = orm;