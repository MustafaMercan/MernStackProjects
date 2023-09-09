const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:3,
        maxlength:30,
    },
    email:{
        type:String,
        required: true,
        minlength:10,
        maxlength:100,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:3,
        maxlength:1024
    }
},{
    timestamps:true //createdAt and updatedAt
})

const userModel = mongoose.model("User",userSchema)
module.exports = userModel