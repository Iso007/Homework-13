// mysql connection
require("dotenv").config();
var mysql = require("mysql");

if (process.env.JAWSDB_MARIA_URL){
    connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
}   else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: process.env.PORT || 3306,
        user: "root",
        password: process.env.PASS,
        database: "burgersDB"
    });
};

// make connection
connection.connect(function (err){
    of (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connecting.threadId);
});

// export connection for ORM use
module.exports = connection;