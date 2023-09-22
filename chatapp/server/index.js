const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/api/users',userRoute);

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;


app.get('/',(req,res) => {

})











app.listen(port,(req,res) => {
    console.log(`server running on port ${port}`)
})

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log('Connected to mongoDB'))
.catch((err) => console.log('connected error',err))