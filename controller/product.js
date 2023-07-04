const fs = require('fs');

const model = require("../MODEL/product");
const Product = model.Product;

exports.createProduct = async (req, res) => {

  const product = new Product(req.body);

  // product.save((err,doc)=>{ // THIS IS DEPRECATED METHOD
  //   console.log({err,doc});
  // })

try {
  await product.save();
}catch(err){
  res.status(405).json(err);
}

// TO USE AS A PROMISE
//   product.save().then((result)=>{
//     res.json({})
//   }).catch((err)=>{console.log(err)})

  res.status(201).json(req.body);
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({price:{$gt:600}});
  res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  const received = await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json(received);
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const received = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(received);
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const received = await Product.findOneAndDelete({_id:id})
  res.status(201).json(received);
};
