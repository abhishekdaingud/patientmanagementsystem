const { Date } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String,
    disease: String,
    date: String,
    date1: Date
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;