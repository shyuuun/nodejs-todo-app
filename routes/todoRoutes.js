const express = require('express');
const todoRouter = express.Router();

const Todo = require('../models/todoModel');

// display all results
const todo = todoRouter.get('/', (req, res)=> {
    Todo.find()
    .then((result)=> {
        res.render('index', {title: 'Todo App', todo: result, numTask: result.length})
    })
    .catch((err)=> {
        console.log(err);
    })

});

// delete
const todoDelete = todoRouter.delete('/delete-task/:id', async (req, res)=> {
    try {
        const id = req.params.id;
        const deletedTask = await Todo.findByIdAndDelete(id);
        
        if(deletedTask) {
            res.json({status: 200});
            console.log('Deleted');
        }
    } catch(err){
        console.log(err);
    }

});
    
// create
const todoCreate = todoRouter.post('/add-task', async (req, res)=>{
    try{
        const addTask = new Todo({
            tasks: req.body.tasks,
            // we want it to display active our task
            isCompleted: false
        });

        const isAdded = await addTask.save();

        if(isAdded){
            res.json({status: 200});
            console.log('Added');
        }
    } catch (err) {
        console.log(err);
    }
})

// update if the task is completed or want to change
const todoUpdateTask = todoRouter.put('/update-task/:id', async (req, res)=> {
    try {
        const id = req.params.id;
        let isUpdated;

        const data = {
            tasks: req.body.tasks,
            isCompleted: req.body.isCompleted
        };

        switch(data){
            case data.tasks == null:
                isUpdated = await Todo.findByIdAndUpdate(id, {
                    isCompleted: req.body.isCompleted
                });
                break;
            case data.isCompleted == null:
                isUpdated = await Todo.findByIdAndUpdate(id, {
                    tasks: req.body.tasks,
                });
                break;
            default:
                isUpdated = await Todo.findByIdAndUpdate(id, {
                    tasks: req.body.tasks,
                    isCompleted: req.body.isCompleted
                });
                break;
        }
        if(isUpdated) {
            res.json({status: 200});
            console.log('Updated');
        }
    } catch(err) {
        console.log(err);
    }
});


// testing for adding a data to our mongo db
todoRouter.get('/add', (req, res)=> {
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