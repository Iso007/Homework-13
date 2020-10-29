var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//creates all routes, sets up logic in routes where needed
router.get("/", function(req, res){
    burger.all(function (data){
        var thisObject = {
            burgers: data
        };
        console.log("index", thisObject);
    });
});

router.post("/api/burgers", function (req, res){
    burger.create(req.body, function (result){
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function (req, res){
    let condition;

    burger.update(condition,req.params.id, function (result){
        if (result.changedRow == 0){
            //if theres no changes, make error 404 (DELETE USER EXIAStANCE!!!)
            return res.status(404).end();
        }   else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res){
    var condition = "id = " + params.id;

    burger.delete(condition, function (result){
        if (result.affectedRows == 0){
            return res.status(404).end();
        }   else {
            res.status(200).end();
        }
    });
});

//export routes for server.js
module.exports = router;