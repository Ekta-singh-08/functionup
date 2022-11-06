const userSchema =require('../schema/models')

let createuser = async function(req,res){
    let data = req.body

    let comingData = await userSchema.create(data)
    res.send({result:comingData})
}
let getuser = async function(req,res){
    let detailsofalluser=await userSchema.find()
    res.send({msg:detailsofalluser})
}


module.exports.createuser=createuser
module.exports.getuser=getuser