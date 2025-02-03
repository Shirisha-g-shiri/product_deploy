const Product = require('../model/Product');


exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleProduct = async (req, res) =>{
    try {
        const product = await Product.findOne({prodId: req.params.id})
        console.log(req.params.id);
        
        if(!product)
            return res.status(404).json({msg: 'Product Not found'})
        
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.addProducts = async (req,res)=> {
    try{
        const product = await Product.findOne({prodId : req.body.prodId});
        if(!product){
            const addproduct= await Product.create(req.body)
            res.json({addproduct})
        }
        else{
            res.json({msg:'Product already exsits'})
        }
        
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

exports.updateProduct = async (req,res)=> {
    try{
        const product = req.body
        const fetchedProduct = await Product.findOne({prodId: product.prodId})
        if(fetchedProduct){
            await Product.updateOne({ prodId: product.prodId } , product)
            res.json(fetchedProduct)
        }
        else{
            res.json({msg: 'Product doesnt exists'})
        }
        
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}


exports.deleteProduct = async (req, res)=>{
    try{
        const product = await Product.findOne({prodId: req.params.id})
        if(product){
            await Product.deleteOne({prodId:product.prodId})
            res.json(product)
        }
        else{
            res.json({msg: 'product doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}