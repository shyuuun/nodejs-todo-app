const express = require('express');
const todoRouter = express.Router();

const Todo = require('../models/todoModel');

// display all results
const todo = todoRouter.get('/', (req, res)=> {
    Todo.find()
    .then((result)=> {
        res.render('index', {title: 'Todo App', todo: result})
    })
    .catch((err)=> {
        console.log(err);
    })

});

const todoDelete = todoRouter.delete('/delete-task/:id', async (req, res)=> {
    try {
        const id = req.params.id;
        const deletedTask = await Todo.findByIdAndDelete(id);
        
        if(deletedTask) {
            res.json({redirect: '/'})
            console.log('Deleted');
        }
    } catch(err){
        console.log(err);
    }

});
    

// testing for adding a data to our mongo db
todoRouter.get('/add-task', (req, res)=> {
    // here is our sample data that will send to our db.
    const dummyTask = new Todo({
        tasks: 'Play games',
        isCompleted: false
    });
    
    dummyTask.save()
    .then((result)=>{
        res.redirect('/');
        console.log('Saved');
    })
    .catch((err)=> {
        console.log(err);
    })
});


module.exports = todoRouter;