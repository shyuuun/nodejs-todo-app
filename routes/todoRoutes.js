const express = require('express');
const todoRouter = express.Router();
const todoController = require('../controller/todoController');

todoRouter.get('/', todoController.todo);
todoRouter.delete('/delete-task/:id', todoController.todoDelete);
todoRouter.post('/add-task', todoController.todoCreate);
todoRouter.put('/update-task/:id', todoController.todoUpdateTask);


module.exports = todoRouter;