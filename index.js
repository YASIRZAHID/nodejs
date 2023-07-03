const http = require("http");
const fs = require("fs");
const { json } = require("express");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;


const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url.startsWith ("/product")) {
    const id = req.url.split('/')[2];
    console.log(id);
    const product = products.find(p=>p.id==(+id));
    console.log(product);
    res.setHeader('Content-Type', 'text/html');
    let modifiedIndex = index.replace('**title**', product.title)
    .replace('**url**',product.thumbnail)
    .replace('**price**',product.price)
    .replace('**rating**',product.rating);
    res.end(modifiedIndex);
    return;
  }

  switch(req.url){
    case "/":
      console.log("MAIN PAGE");
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      console.log("server started ");
        res.setHeader("Content-Type", "application/json");
        // res.end(JSON.stringify(data));
        res.end(JSON.stringify(data));
        break;
    default:
        res.writeHead(404, "not found")
        res.end();

  }
});

server.listen(8080);