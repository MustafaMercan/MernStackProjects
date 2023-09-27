const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const dbConnect = () => {
    const url = process.env.MONGODB
    mongoose.connect(url)
    .then(() => console.log('mongodb connection succes'))
    .catch(err => console.log(err))
}

module.exports.dbConnect = dbConnect