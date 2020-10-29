
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cd(result);
        });
    },
    insertOne: function(table, value, cd){
        var queryString = "INSERT INTO" + table + "set ?";
        connection.query(queryString, value, function(err, result){
            if (err) {
                throw err;
            }
            cd(result);
        });
    },
    updateOne: function(table, condition, id, cb){
        var queryString = "UPDATE " + table + "SET" + condition + " WHERE id = ?";
        connection.query(queryString, id, function(err, result){
            if (err) {
                throw err;
            }
            cd(result);
        });
    }
};

module.exports = orm;