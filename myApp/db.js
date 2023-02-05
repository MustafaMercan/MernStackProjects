const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const uri = process.env.URI;

const db = () => {
    mongoose.set({strictQuery:true});

    mongoose.connect(uri,{
        dbName:'letgoApp',
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    mongoose.connection.on('error',(console.error.bind(console,'connection was failed')));
    mongoose.connection.once('open',() => {console.log('connection is success')});
}

module.exports = db;