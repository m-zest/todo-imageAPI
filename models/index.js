var mongoose = require("mongoose")
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/api-images", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
