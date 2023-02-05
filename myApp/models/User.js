const {Schema,default:mongoose} = require('mongoose');
const bcrypt = require('bcrypt');
const {isEmail} = require('validator');

const schema = new Schema({
    name:{
        type:String,
        lowercase:true,
        required:[true,'Please enter a name'],
        trim:true
    },
    surname:
    {
        type:String,
        lowercase:true,
        required:[true,'Please enter a surname'],
        trim:true 
    },
    email:{
        type:String,
        required:[true,'Please enter an email'],
        trim:true,
        unique:true,//Error code -> 11000
        validate:[isEmail,'Please enter a valid email adress']
    },
    password:{
        type:String,
        require:[true,'Please enter a password'],
        minLength:[6,'Mininmum password length is 6 characters'],
    },
});

schema.pre('save', async function(next){
    const saltRound = 10;
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

schema.statics.login = async function (email,password){


    const loginUser = await this.findOne({email});
    let errorMessage = '';
    if(loginUser)
    {
        const auth = await bcrypt.compare(password,loginUser.password);
        if(auth)
            return {loginUser,errorMessage};
        else
        {
            errorMessage='Invalid password.';
            return{loginUser,errorMessage};
        }
    }
    else
    {
        errorMessage = 'Invalid email adress.';
        return{loginUser,errorMessage};
    }
}
const User = mongoose.model('user',schema);

module.exports = User;

