var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

//parce app body as JSON
app.unsubscribe(express.urlencoded({ extended: true}));
app.use(express.json());

// set handlebars
var stuff = require("express-handlebars");

app.engine("handlebars", stuff({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import roots and give server access
var rootes = require("./controllers/controller.js");

app.use(rootes);

//server start
app.listen(PORT, function(){
    console.log("server listening on: http://localhost:"+ PORT);
});