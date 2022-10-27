const mongoose = require('mongoose');

const autthorSchema = new mongoose.Schema({
    author_id:{type:Number,require:true},
    author_Name:String,
    age:Number,
    address:String
})

module.exports = mongoose.model('author', autthorSchema) //users