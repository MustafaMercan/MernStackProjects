const {Schema,default:mongoose} = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator'); 

const schema  = new Schema({
    email:{
        type:String,
        required:[true, 'Please enter an email.'],
        trim:true,
        unique:true,//this gets error code instead of error message. code => 11000 
        validate:[isEmail,'Please enter a valid email adress.']

    },
    password:{
        type:String,
        require:[true,'Please enter an password'],
        minLength:[6,'Mininum password length is 6 characters'],
    }
});

//fire a function after doc saved to db
schema.post('save',function(doc,next) {
    console.log(this.password);
    next();
})
//fire a function before doc saved to db
//don't use arrow function because of we used this keyword
schema.pre('save',async function(next){
  
    const saltRound = 10;
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

//static method to login user
schema.statics.login = async function (email,password)
{
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const user = mongoose.model('user',schema);

module.exports = user;