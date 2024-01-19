const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const port = 3000;

// view engine
app.set('view engine', 'ejs');
// middleware
app.use(express.static('public/'));
app.use(express.urlencoded( {
    extended: true
}));




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

app.listen(port, ()=> {
    console.log(`Port is running in ${port}`);
});

