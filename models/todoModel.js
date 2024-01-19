const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    tasks: {
        type: String,
        require: true
    },
    isCompleted: {
        type: Boolean,
        require: true
    }
}, {timestamps: true});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;