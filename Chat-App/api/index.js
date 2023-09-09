const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const {UserModel} = require('./models/User')

dotenv.config();

console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);

const jwtSecret = process.env.JWT_SECRET;
const app = express();

app.use(cors({
    credentials:true,
    //origin:process.env.CLIENT_URL
}))

app.get('/test',(req,res) => {
    res.json('TEST OK')
})

app.post('/register',async (req,res) => {
    //const {username,password} = req.body;

    console.log(req.body)
    const createdUser = await UserModel.create({username:'mustafa1',password:'mercan'})
    jwt.sign({userId:createdUser._id},jwtSecret,(err,token) => {
        if(err) throw err;
        res.cookie('token', token).status(201).json('ok');
    })
})

app.listen(4000,() => {
    console.log(`Server started.!`)
})