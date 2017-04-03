const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const task = require('./models/task');

const dbPath = 'mongodb://localhost/todoapi';

var app = express();
mongoose.createConnection(dbPath);

//middleware to handle JSON and POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//index - get all tasks in the database
app.get('/', function (req, res) {
    task.find(function (err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    });
});

//get a specific task in the database
app.get('/:_name', function (req, res) {
    task.find({
        "name": req.params._name
    }, function (err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    });
});

//create a new task
app.post('/new', function (req, res) {
    task.create(req.body, function (err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    });

});

//delete a task
app.delete('/delete/:_name', function (req, res) {
    task.remove({
        "name": req.params._name
    }, function (err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    });
});

//update a task
app.put('/update/:_name', function (req, res) {
    task.update({
        "name": req.params._name
    }, req.body, function (err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    });
});


//start the server
app.listen(3000);
console.log('Server Started');
