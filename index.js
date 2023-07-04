require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')


// DATABASE CONNECTION CODE
// mongoose.connect('mongodb://127.0.0.1:27017/testNODE');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testNODE');
  console.log("DATABASE CONNECTED");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

// console.log(process.env.DB_PASSWORD);
server.listen(process.env.PORT, () => {
  console.log('server started');
});
