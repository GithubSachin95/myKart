    const express = require('express')
    const mongoose = require('mongoose')
    const product = require('../models/product')
    const productModel = mongoose.model('product' , product.productModel)
    const shortid = require('shortid');
    const cart = require('../models/cart');
    const cartModel = mongoose.model('cart' , cart.cartModel);
    const response = require('../libs/responseLibs');



    let getAllProducts = (req,res)=>{
        productModel.find()
        .select('-_v -_id')
        .lean()
        .exec((err,result)=>{
            if(err){
                
                let apiResponse = response.generate(true ,"Failed to find product details" , 500 , null);
                res.send(apiResponse);
            }else if(result== undefined || result =="" || result==null){
               
                let apiResponse = response.generate(true ,"No products found" , 404 , null);
                res.send(apiResponse);
            }else{
                
                let apiResponse = response.generate(false ,"All product details found" , 200 , result);
                res.send(apiResponse);
            }

            
        })
    }
    
    let viewProductByID = (req, res) => {

        productModel.findOne({ 'productID': req.params.productID })
        .exec((err,result)=>{
            if(err){
                
                let apiResponse = response.generate(true ,"Product ID is missing" , 403 , null);
                res.send(apiResponse);
            }else if(result== undefined || result =="" || result == null){
                
                let apiResponse = response.generate(true ,"No products found " , 404 , null);
                res.send(apiResponse);
            }else{
                result.views += 1;
                result.save(function(err,result){
                    if(err){
                        console.log(err);
                        res.send(err)
                    }
                    else{
                        let apiResponse = response.generate(false ,"product details found" , 200 , result);
                        res.send(apiResponse);
                    }
                })
            }

            
        })}
    let createProduct = (req,res)=>{
        var today = Date.now();
        var productID = shortid.generate();
        console.log(productID);
        let newProduct = new productModel({
            productID : productID,
            name : req.body.name,
            description : req.body.description,
            vendor : req.body.vendor,
            views : req.body.views,
            created : today,
            deliveryMethod : req.body.deliveryMethod
        })
        newProduct.save((err,result)=>{
            if(err){
                console.log(err);
                let apiResponse = response.generate(true ,"Unable to create new product" , 500 , null);
                res.send(apiResponse);
            }
            else{
                let apiResponse = response.generate(false ,"Product created" , 200 , result);
                res.send(apiResponse)
            }

        })

    }

    let editProduct = (req,res)=>{
        let options =req.body;
        console.log(req.body)
        console.log(req.params.productID);
        productModel.update({"productID":req.params.productID }, options , {multi : true})
        .exec((err,result)=>{

            if(err){
                console.log(err);
                let apiResponse = response.generate(true ,"Error occured" , 400 , null);
                res.send(apiResponse)
            
        }else if(result== undefined || result =="" || result == null){
            console.log("No products found");
            let apiResponse = response.generate(true ,"No product is found with that product ID" , 404 , null);
            res.send(apiResponse)
        }else{
            let apiResponse = response.generate(false ,"Product updated" , 200 , result);
                res.send(apiResponse)
        }
        })
    }
    let deleteProduct = (req,res)=>{
        productModel.remove({productID : req.params.productID} , (err,result)=>{
            if(err){
                let apiResponse = response.generate(true ,"No product is found with that product ID" , 404 , null);
            res.send(apiResponse)
            }
            else{
                let apiResponse = response.generate(false ,"Product deleted" , 200 , result);
                res.send(apiResponse)
            }

        })

    }
    //Start of view cart function
    let getCart = (req,res)=>{
        cartModel.find()
        .select('-_v -_id')
        .lean()
        .exec((err,result)=>{
            if(err){
                let apiResponse = response.generate(true ,"Failed to find product details" , 500 , null);
                res.send(apiResponse);
            }else if(result== undefined || result =="" || result==null){
                console.log("No products found");
                let apiResponse = response.generate(true ,"No products found" , 404 , null);
                res.send(apiResponse);
            }else{
                let apiResponse = response.generate(false ,"Cart found" , 200 , result);
                res.send(apiResponse);
            }

            
        })
    }//end of view cart function

    //start of add products in cart using productID

    let addProductCart = (req,res)=>{
        productModel.findOne({ 'productID': req.params.productID })
        .exec((err,result)=>{
            if(err){
                let apiResponse = response.generate(true ,"Failed to load poducts" , 500 , null);
                res.send(apiResponse);
            }else if(result== undefined || result =="" || result == null){
                let apiResponse = response.generate(true ,"No products found" , 404 , null);
                res.send(apiResponse);
            }else{
                cartModel.insertMany(result , (err,result)=>{
                    if(err){
                let apiResponse = response.generate(true ,"It's already there in the cart. You can add more than once" , 501 , null);
                res.send(apiResponse);
                    }
                    else{
                        let apiResponse = response.generate(false ,"Cart updated" , 200 , result);
                        res.send(apiResponse);
                    }
                })
            }
        })}
            

    let removeProductCart = (req,res)=>{
        cartModel.remove({productID : req.params.productID} , (err,result)=>{
            if(err){
            let apiResponse = response.generate(true ,"No product is found with that product ID" , 404 , null);
            res.send(apiResponse)
            }
            else{
                let apiResponse = response.generate(false ,"Product deletd from the cart" , 200 , result);
                res.send(apiResponse);
            }

        })

    }

                    


    
    module.exports = {

        getAllProducts : getAllProducts,
        viewProductByID : viewProductByID,
        createProduct : createProduct,
        editProduct : editProduct,
        deleteProduct : deleteProduct,
        getCart : getCart,
        addProductCart : addProductCart,
        removeProductCart: removeProductCart

    }