var mongoose = require("mongoose");


var todoSchema = new mongoose.Schema({
    url: String,
    name: String,
    type: String
});

var Todo = mongoose.model("Todo", todoSchema, "Todo");

module.exports = Todo;


// name
//completed
//created date