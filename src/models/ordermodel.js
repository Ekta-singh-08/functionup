const mongoose = require('mongoose')
const { getBooksData } = require('../controllers/bookController')

const orderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user1"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    amount:Number,
    
    isfreeAppUser:Boolean,
    
    date:Date,
    
    },{timesstamps: true});
    module.exports = mongoose.model('order', orderSchema)
