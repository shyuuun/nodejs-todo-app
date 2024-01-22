const express = require('express');
const userRouter = express.Router();

const User = require('../models/userModel');



const login = userRouter.get('/login', (req, res)=> {
    res.render('login');
})

const register = userRouter.get('/register', (req, res)=> {
    res.render('register');
})

const sendUser = userRouter.post('/register', (req, res)=> {
    const {username, email, pass, confirmpass} = req.body

    if (!username || !email || !pass || !confirmpass) {
        res.render('register', {err: "All Fields are Required!"})
    }

    // TO:DO completed validation of user account and send it to mongo db
})




module.exports = userRouter;