const userModel = require("../models/user1 model")

const createnewUser= async function (req,res) {
    let newUser = req.body
    let newsecreated= await userModel.create(newUser)
    res.send({data: newsecreated})

}
module.exports.createnewUser= createnewUser