const express = require('express');
const pageController = require('./routes/pageRoutes.js');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const db = require('./db.js');
const {checkUser} = require('./middleware/authMiddleware.js');


db();

const app = express();

//Settings Port
const port = process.env.PORT;


app.set('view engine','ejs');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.use('*',checkUser);
app.get('/',(req,res) => {res.render('home');})
app.use(pageController);



app.listen(port,() => {
    console.log(`App is working on ${port} port`);
})


