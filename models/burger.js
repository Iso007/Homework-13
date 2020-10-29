// importr ORM to create function to interact with the db
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    // variable cols and vals are arrays
    create: function(value, cb){
        orm.insertOne("burgers", value, function(res){
            cb(res);
        });
    },
    update: function(condition, id, cb){
        condition = "devoured = true"
        orm.updateOne("burgers", condition, id, function(res){
            cb(res);
        });
    }
};

// export db function for the controller
module.exports = burger;