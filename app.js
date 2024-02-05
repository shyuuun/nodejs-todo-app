require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const MemoryStore = require('memorystore')(session);
const morgan = require('morgan');

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
const Tokens = require('csrf');

const port = process.env.PORT || 5000;
const URI = process.env.URI
/*
    connect our database here. check config/init.js 
    to insert your credentials
*/
mongoose.connect(URI)
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
app.use(express.json());
app.use(morgan('dev'));

app.use(cookieParser('random'));
app.use(session({
    secret: "random",
    resave: "true",
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000,
    store: new MemoryStore(),
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


// routes
app.get('/', (req, res) => {
    res.redirect('/todo');
});

app.get('/user', (req, res) => {
    res.redirect('/user/login');
});

app.use('/todo', todoRoutes);
app.use('/user', userRoutes);
/*
app.get('/', (req, res)=> {
    res.send('Hello!');
});
*/

app.listen(port, ()=> {
    console.log(`Port is running in ${port}`);
});

