const express = require('express');
const todoRouter = express.Router();


const todo = todoRouter.get('/', (req, res)=> {
    res.render('index', {title: 'Todo App'})
});

module.exports = todoRouter;