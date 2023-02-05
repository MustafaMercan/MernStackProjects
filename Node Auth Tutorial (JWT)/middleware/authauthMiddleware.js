const jwt = require('jsonwebtoken');
const user = require('../models/User');


const requireAuth = (req,res,next) => {

    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token, 'secret key loooll', (err,decodedToken) => {
            if(err)
            {
                console.log(err.message);
                res.redirect('/login');
            }
            else{
                console.log(decodedToken);
                next();
            }
        })

    }else{
        res.redirect('/login');
    }
}

const checkUser = (req,res,next) => {
    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token,'secret key loooll', async(err,decodedToken) => {
            if(err)
            {
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else
            {
                console.log(decodedToken);
                let checkUser = await user.findById(decodedToken.id);
                res.locals.user = checkUser;
                next();
            }

        })

    }else{
        res.locals.user = null;
        next();
    }
}

module.exports = {requireAuth,checkUser};