var mysql = require('mysql');

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '9776',
    database : 'pizzaalvolo',
    port: 3306
})

module.exports = db;
