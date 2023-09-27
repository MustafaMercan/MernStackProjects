const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const createHash = async(password) => {
    const saltRounds = 10;
    try{
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;

    }catch(err){
        console.log(err);
        return null;
    }
}

const validateUser = async (password,hash) => {
    return await bcrypt.compare(password,hash);
}

const registerController = async(req,res) => {

    console.log('post request');

    const {name,email,password} = req.body; 
    if(!name || !email || !password) return res.status(400).json({message:"Missing information..."});

    const user = await userModel.findOne({email})
    if(user) return res.status(400).json({message:"You already registered..."});

    const hashedPassword = await createHash(password);
    
    if(!hashedPassword) return res.status(500).json({message:"Server error."});

    const newUser = await userModel({name,email,password:hashedPassword}).save();

    if(!newUser) return res.status(500).json({message:"User cannot created."});

    return res.status(201).json({message:"User created."})

}

const loginController = async(req,res) => {
    const {email,password} = req.body;
    if(!email || !password) return res.status(400).json({message:"Missing information..."});

    const user = await userModel.findOne({email});
    if(!user) return res.status(400).json({message:"Email or password is wrong..."});

    if(!await validateUser(password,user.password)) return res.status(400).json({message:"Email or password is wrong..."});

    res.status(200).json({user:{
        name:user.name,
        email:user.email,
        id:user._id
    },message:"Validation is OK"});

}

const getUserController = async(req,res) => {
    try{
        const users = await userModel.find({},{password:0}); //except id
        res.status(200).json({users:users})
    }catch(err){
        console.log(err);
        res.status(500).json({message:err});
    }
}

module.exports = {
    registerController,
    loginController,
    getUsers:getUserController
}