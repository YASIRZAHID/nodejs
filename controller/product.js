const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'));
// const products = data.products;

const model = require("../MODEL/product");
const Product = model.Product;

exports.createProduct = async (req, res) => {
  // console.log(req.body);
  // products.push(req.body);
  const product = new Product();
  product.title = "new phone";
  product.description = "description here";
  product.price = 0;
  product.discountPercentage = 21;
  product.rating = 0;
  product.brand = "";
  product.category = "phone";
  product.thumbnail = "this is a new phone"
  product.images = ["link1", "link2",]

  // product.save((err,doc)=>{
  //   console.log({err,doc});
  // })

  await product.save();

//   product.save().then((result)=>{
//     res.json({})
//   }).catch((err)=>{console.log(err)})

  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};
