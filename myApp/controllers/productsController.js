const Product = require('../models/Product.js');

const handleErrors = (err) => {
    
    let errorMessages = {productTitle:'',productDescription:'',productImage:''};
    //console.log(Object.values(err.errors));
    //console.log(err.errors)
    console.log('err')
    if(err.message.includes('Products validation failed'))
    {
        Object.values(err.errors).forEach(({properties}) => {
            errorMessages[properties.path] = properties.message;
        })
        return errorMessages;
    }
}
exports.userProductsGet = (req,res) => {
    res.render('userProducts');
}

exports.createproductGet = (req,res) => {
    res.render('createProduct');
}


exports.createproductPost = async(req,res) => {

    const {productTitle,productDescription,productImage} = req.body;
    try {
        const newProduct = await Product.create({productTitle,productDescription,productImage});
        res.status(201).json({product:newProduct._id});
    } catch (error) {
        let errors = handleErrors(error);
        res.status(400).json({errors});
    }
}