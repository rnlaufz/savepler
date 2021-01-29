const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const historySchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    action: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true
    },
    date: {
       type: Date, 
       default: Date.now 
    }
})

module.exports = History = mongoose.model('history', historySchema);