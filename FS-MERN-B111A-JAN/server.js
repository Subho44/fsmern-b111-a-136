const express = require('express');
const app = express();
const port = 5700;

const products = require('./data/product');
app.use(express.json());
//view all product
app.get('/api/products',(req,res)=>{
    res.json(products);
});
//sigle view product
app.get('/api/products/:id',(req,res)=>{
    const productid = parseInt(req.params.id);
    const product = products.find(p =>p.id ===productid);
    if(product) {
        res.json(product);
    } else {
        res.status(404).json({message:"product not found"})
    }
});
app.listen(port, ()=>{
    console.log("server is running port 5700");
});