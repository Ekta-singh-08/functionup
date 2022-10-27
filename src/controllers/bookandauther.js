// const author_model = require("../models/authermodule")
const book1model = require('../models/authermodule')

const Book1data = async function(req,res){
    let data = req.body
    let books = await book1model.create(data)
    res.send(books)
}
module.exports.Book1data= Book1data