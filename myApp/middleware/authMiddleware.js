const jwt = require('jsonwebtoken');
const user = require('../models/User.js');
const dotenv = require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const requireAuth = (req,res,next) => {
    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token,secretKey,(err,decodedToken) => {
            if(err)
            {
                console.log(err.message);
                res.redirect('/login');
            }
            else{
                //console.log(decodedToken);
                next();
            }
        })
    }else{
        res.redirect('/login');
    }
}
const checkUser = (req,res,next) => {
    const token = req.cookies.jwt;
    jwt.verify(token,secretKey,async(err,decodedeToken) => {
        if(err)
        {
            console.log(err.message);
            res.locals.user = null;
            next();
        }
        else
        {
            console.log(decodedeToken);
            let checkUser = await user.findById(decodedeToken.id);
            if(checkUser)
                res.locals.user = checkUser;
            else
                res.locals.user = null;
            next();
        }
    })
}

module.exports = {requireAuth,checkUser};