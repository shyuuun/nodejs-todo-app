const Todo = require('../models/todoModel');

const todo = (req, res) => {
    Todo.find()
    .then((result)=> {
        res.render('index', {title: 'Todo App', todo: result, numTask: result.length})
    })
    .catch((err)=> {
        console.log(err);
    })

}

const todoDelete = async (req, res)=> {
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
}

const todoCreate = async (req, res)=>{
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
}

const todoUpdateTask = async (req, res)=> {
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
}

module.exports = {
    todo,
    todoDelete,
    todoCreate,
    todoUpdateTask,
}

