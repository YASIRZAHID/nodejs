const mongoose = require('mongoose');
const { Schema } = mongoose;


// SCHEMA
const productSchema = new Schema({
    title: {type:String , required:true, unique:true},
    description: {type:String , required:true},
    price:  {type:Number , min:[0,'price must be more than 0']},
    discountPercentage: {type:Number , min:[0,'discount too small'] , max:[50,'discount too high']},
    rating: {type:Number , min:[0,'rating too small'] , max:[5,'rating too high']},
    brand: {type:String , required:true},
    category: {type:String , required:true},
    thumbnail: {type:String , required:true},
    images:[String],
});

exports.Product = mongoose.model('Product', productSchema);

//CRUD OPERATIONS
