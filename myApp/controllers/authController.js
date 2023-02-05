const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const handleErrors = (err) => {
    let errors = {name:'',surname:'',email:'',password:''};
    if(err.message.includes('user validation failed'))
    {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
        return errors;
    }
    if(err.code == 11000)
    {
        errors.email = 'That email adress is already registered';
        return errors;
    }
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    const secretKey = process.env.SECRET_KEY;
    return jwt.sign({id},secretKey,{
        expiresIn:maxAge,
    });

}
exports.loginGet = (req,res) => {
    res.render('login');
}
exports.loginPost = async(req,res) => {
    const {email,password} = req.body;
    try {
        const {loginUser,errorMessage} = await User.login(email,password);
        if(errorMessage)
        {
            res.json({user:null,errorMessage});
        }
        else
        {
            const token = createToken(loginUser._id);
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
            res.status(200).json({user:loginUser._id,errorMessage});
        }
    } catch (error) {
        console.log(error);
    } 
}

exports.signupGet = (req,res) => {
    res.render('signup');
}
exports.signupPost = async(req,res) => {
    const {name,surname,email,password} = req.body
    try {
        const newUser = await User.create({name,surname,email,password})
        const token = createToken(newUser._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge * 1000});
        res.status(201).json({user:newUser._id});    
    } catch (error) {
        let errors = handleErrors(error);
        res.status(400).json({errors});
    }
}
exports.logoutGet = async(req,res) => {
    //const token = req.cookies.jwt;
    try {    
        const token = await req.cookies.jwt;
        if(token)
        {
            console.log('test');
            console.log(token);
            await res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
            await res.cookie('jwt',token,{httpOnly:true,maxAge:1});
            res.status(200).redirect('/');
        }else{
            res.redirect('/');
        }
    } catch (error) {
        console.log('TEst');
    }

}

