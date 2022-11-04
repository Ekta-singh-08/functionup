const productModel = require("../models/productmodel")

const createproduct = async function (req,res){
    let product= req.body
    let productcreated = await productModel.create(product)
    res.send({data: productcreated})

}

module.exports.createproduct = createproduct