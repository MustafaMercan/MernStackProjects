const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const {requireAuth, checkUser} = require('./middleware/authauthMiddleware.js');
const db = require('./db.js');



//connection with mongodb
db();

//local port adress
const port = 3000;

const app = express();

app.use(cookieParser());

//define static files(css file and png file)
app.use(express.static('public'));

//Enables the analysis of the content of HTPP requests as json
app.use(express.json());

//Enables the analysis of HTTPS requests contents as URL encoded data
app.set(express.urlencoded);
app.set('view engine','ejs');

app.get('*',checkUser);
app.get('/',(req,res) => res.render('home'));
app.get('/smoothies',requireAuth,(req,res) => res.render('smoothies'));

app.use(authRoutes);


// app.get('/set-cookies',(req,res) => {
//     //res.setHeader('Set-Cookie', 'newUser=true');
    

//     res.cookie('newUser',false);
//     res.cookie('isEmployee',true,{maxAge:1000* 60 * 60 * 24});

//     res.send('You got the cookie');
// })

// app.get('/read-cookies',(req,res) => {

//     const cookies = req.cookies;
//     console.log(cookies);

//     res.json(cookies);

// })


app.listen(port,() => console.log(`The app is working on ${port} port`));









