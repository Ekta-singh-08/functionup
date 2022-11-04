const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number,
        require: true,

    },
},{timestamps: true});


module.exports= mongoose.model('product',productSchema)