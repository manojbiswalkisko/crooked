const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    }
}, {collection: 'user-fill-data'});



// Define User Model
const User = mongoose.model("User", userSchema);

module.exports = User