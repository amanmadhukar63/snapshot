const mongoose = require('mongoose');
const url=require('../secrets');

mongoose.connect(url);

const userschema=mongoose.Schema({
    username:String,
    email:String,
    password:String
});

module.exports=mongoose.model("users",userschema);