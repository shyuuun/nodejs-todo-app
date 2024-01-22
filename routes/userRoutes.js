const express = require('express');
const userRouter = express.Router();

const User = require('../models/userModel');



const login = userRouter.get('/login', (req, res)=> {
    res.render('login');
})

const register = userRouter.get('/register', (req, res)=> {
    res.render('register');
})




module.exports = userRouter;