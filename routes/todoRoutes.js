const express = require('express');
const todoRouter = express.Router();

const Todo = require('../models/todoModel');


const todo = todoRouter.get('/', (req, res)=> {
    Todo.find()
    .then((result)=> {
        res.render('index', {title: 'Todo App', todo: result})
    })
    .catch((err)=> {
        console.log(err);
    })

});

module.exports = todoRouter;