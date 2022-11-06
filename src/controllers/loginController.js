const jwt = require("jsonwebtoken");
const  userModel = require("../models/userModel");

const login = async function (req,res){

    const{emailId,paswword} = req.body
    const fetchdata = await userModel.findOne({emailId:emailId,paswword:paswword})

    if(fetchdata==null) res.send("doesn't match the emailId and password with userdata")

    console.log("loging successfully")
    const myToken = jwt.sign({email:emailId},'passwordSignature')
    res.send({status:true,data:myToken})

}

module.exports.login = login