const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.uri.toString();




mongoose.set('strictQuery',true);
const db = () => {
    mongoose.connect(uri,{
        dbName:"AuthExercises",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

    mongoose.connection.on('error',(console.error.bind(console,'Db connection was failed :(')));
    mongoose.connection.once('open',() => console.log('connection is success'));
}

module.exports = db;

