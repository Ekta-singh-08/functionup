const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const getFetch = async function (req,res){
    const id=req.params.userId
    console.log(id)
    const fetchdata = await userModel.findById(id)
    if(!fetchdata) return  res.send({msg:"user id is invalid"})
    
    console.log(fetchdata)
    res.send(fetchdata)

}    

    const getUpdate = async function (req,res){
       
        const id=req.params.userId
        const userauth = await userModel.findById(id)
        if (!userauth) res.send({stauts:false,msg:"invalid userid"})

        const {lastName,age} =req.body
        const fetchdata = await userModel.findOneAndUpdate({_id:id},{lastName:lastName,age:age},{new:true})

        res.send(fetchdata)


    }
    const getDelete = async function (req,res){
        const id=req.params.userId
        
        const fetchdata = await userModel.findOneAndUpdate({_id:id},{isDeleted:true},{new:true})
        res.send(fetchdata)

    }
    
    module.exports.getFetch=getFetch
    module.exports.getUpdate=getUpdate
    module.exports.getDelete=getDelete


        
    

