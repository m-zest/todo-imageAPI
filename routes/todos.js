var express = require("express");
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
    //console.log(req.body);
    
});

router.post("/", function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.json(newTodo)
    })
    .catch(function(err){
        res.send(err);
    })
});

router.get("/:name", function(req, res){
    db.Todo.findOne(req.params)
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send(err)
    })
})

module.exports = router; 