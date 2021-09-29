const { HOST, PORT, USER, PASSWORD, mariadb, DATABASE } = require('../config');

var host = (HOST === 'localhost') ? '127.0.0.1' : HOST;

const pool = mariadb.createPool({
    host: host,
    user: USER,
    password: PASSWORD,
    connectionLimit: 5,
    database: DATABASE
})

module.exports = {
    getConnection: function () {
        return new Promise(function (resolve, reject) {
            pool.getConnection().then(function (connection) {
                resolve(connection);
            }).catch(function (error) {
                reject(error);
            });
        });
    }
}