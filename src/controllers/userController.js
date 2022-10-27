/*const UserModel= require("../models/userModel")
const UserModel2= require("../models/books.js")
const userModel = require("../models/userModel")


const createauthor= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getauthor= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel2.create(data)
    res.send({msg: savedData})
}

const getBook= async function (req, res) {
    let allUsers= await UserModel2.find()
    res.send({msg: allUsers})
}


const search= async function (req, res) {
    let allUsers= await UserModel.findOne({ author_name:"Chetan Bhagat"})
    
    
    let yash = allUsers.author_id

    let allBooks= await UserModel2.find({  author_id:yash })
    res.send({msg: allBooks})
}


const searchauthor= async function (req, res) {
    let allauthor= await UserModel2.findOneAndUpdate({ name:"Two states" } , {$set : {price : 100}} , {new : true})
    let Yash = allauthor.author_id
    let findauthor = await userModel.findOne({ author_id : Yash})
    res.send({price : allauthor.price , author_name :findauthor.author_name  })
}

const Bookprice = async function (req, res) {
    let all= await UserModel2.find({ price : { $gte: 50, $lte: 100} }).select({ author_id :1})
    
    for (let i = 0 ; i<all.length ; i++ ){
        
        let YAsh = all[i].author_id
   let AuthorName= await UserModel.find({  author_id:YAsh })
   let k = AuthorName[0].author_name
   let BookNames = await UserModel2.find({  author_id:YAsh })
   console.log([BookNames[0]])
 
 console.log({author_name : k})

 
   
    
}


}









module.exports.createauthor= createauthor
module.exports.getauthor= getauthor

module.exports.createBook = createBook
module.exports.getBook = getBook

module.exports.search = search

module.exports.searchauthor = searchauthor

module.exports.Bookprice = Bookprice*/