const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

//Post : create new product
router.post('/',(req,res) => {

    product = new Product({

        name:req.body.productName,
        price:req.body.price,
        color:req.body.color,
        producttype:req.body.producttype,
        description:req.body.description,



    });
    product.save().then(product =>{
        res.send(product);
    }).catch(error => {
        res.status(500).send("Product not added")
    });
});

module.exports = router;


