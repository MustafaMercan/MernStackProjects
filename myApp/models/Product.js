const {Schema,default:mongoose} = require('mongoose');

const productSchema = new Schema({
    productTitle:{
        type:String,
        required:[true,'Please enter a product title.'],
        trim:true,
    },
    productDescription:{
        type:String,
        required:[true,'Please enter a product description.'],
        trim:true,
    },
    productImage:{
        type:String,
        required:[true,'Please upload a product image.'],
        trim:true,
    },
    uploadedAt:{
        type:Date,
        default:Date.now,
    }
});

const Product = mongoose.model('Products',productSchema);

module.exports = Product;