const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const goalSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    goal: {
        type: String,
        required: true
    },
    sum: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    added: {
        type: Number,
        required: true,
    },
    lended: {
        type: Number,
        required: true
    },
    residue: {
        type: Number,
        required: true
    },
    date: {
       type: Date, 
       default: Date.now 
    }
})

module.exports = Goal = mongoose.model('goal', goalSchema);