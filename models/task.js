const mongoose = require('mongoose');

const dbPath = 'mongodb://localhost/todoapi';

mongoose.connect(dbPath);

var taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    created: {
        type: Date,
        default: Date.now()
    },
    due: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('tasks', taskSchema);
