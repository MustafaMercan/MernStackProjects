const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./Routes/userRoute');


dotenv.config();
const app = express();

//middlewares
app.use(express.json())//allow us to use json data receive and send
app.use(cors())//allow us to communicute with the front end 
app.use("/api/users",userRoute);

const PORT = process.env.PORT || 5050;
const uri = process.env.DB_URI
console.log(uri)

app.get('/',(req,res) => {
    res.send("Welcome our chat app api")
})


app.listen(PORT,(req,res) => {
    console.log(`Server running on port ${PORT}`);
})

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log('MongoDB connection established'))
.catch((err) => console.log("MongoDB connection failed -> ", err));