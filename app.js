const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

const todoRoutes = require('./routes/todoRoutes');
const conf = require('./config/init');

/*
    connect our database here. check config/init.js 
    to insert your credentials
*/
mongoose.connect(conf.uri)
    .then((result)=> {
        console.log('Connected to database');
    })
    .catch((err)=> {
        console.log(err);
    });


// view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public/'));
app.use(express.urlencoded( {
    extended: true
}));
app.use(morgan('dev'));



// routes
app.get('/', (req, res) => {
    res.redirect('/todo');
});

app.use('/todo', todoRoutes);

/*
app.get('/', (req, res)=> {
    res.send('Hello!');
});
*/

app.listen(conf.port, ()=> {
    console.log(`Port is running in ${conf.port}`);
});

