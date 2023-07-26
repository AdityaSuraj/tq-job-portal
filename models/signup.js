const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Name:{
        required: true,
        type: String

    },

    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: Number
    },
    
})

module.exports = mongoose.model('Data', dataSchema)