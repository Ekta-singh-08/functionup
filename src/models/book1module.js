const mongoose = require('mongoose');



const BooksSchema = new mongoose.Schema( {
    
        name:String,
        author_id: {
            type : Number,
            require: true },
        price: Number,
        ratings: Number
    }
);
module.exports = mongoose.model('book', BooksSchema) 
