const user = require('../models/User.js');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    //console.log(err.message);
    //console.log(err.message,err.code);
    //let error = {email:'', password:''};
    let errors = {email:'',password:''};
    // if(err.message === 'incorrect email')
    // {
    //     errors.email = 'that email is not registered';
    //     console.log('test1');
    // }
    // if(err.message === 'incorrect password')
    // {
    //     errors.password = 'that password is incorrect';
    //     console.log('test2');
    // }

    if(err.message === 'incorrect email')
    {
        errors.email = 'That email is not registered';
    }

    if(err.message === 'incorrect password')
    {
        errors.password = 'That email is not registered';
    }
         

    if(err.code === 11000){
        errors.email = 'that email adress is already registered';
        return errors
    }
    if(err.message.includes('user validation failed'))
    {
        // console.log(Object.values(err.errors)[0]);
        Object.values(err.errors).forEach(({properties}) => {
            console.log(properties);
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id},'secret key loooll',{
        expiresIn:maxAge,
    });
};
module.exports.signup_get = (req,res) => {
    res.render('signup');
};


module.exports.login_get = (req,res) => {
    res.render('login');
};


module.exports.signup_post = async(req,res) => {
    const {email,password} = req.body;
    console.log(req.body);
    try {
        const newUser = await user.create({email,password});
        const token = createToken(newUser._id);
        res.cookie('jwt',token,{httpOnly:true, maxAge: maxAge * 1000});
        res.status(201).json({user:newUser._id});
        
    } catch (err) {
        let errors = handleErrors(err);
        res.status(400).json({errors});
        console.log('TEST');
    }
};
module.exports.login_post = async(req,res) => {
    //user.login(email,password);
    const {email,password} = req.body;
    const loginUser = user.login(email,password);
    try {
        const loginUser = await user.login(email,password);
        const token = createToken(loginUser._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge * 1000});
        res.status(200).json({user:loginUser._id});
    } catch (err) {
        console.log('test');
        const errors = handleErrors(err);

        res.status(400).json({ errors });
    }
};
module.exports.logout_get = async(req,res) => {
    res.cookie('jwt','',{maxAge:1});
    res.redirect('/');
}
