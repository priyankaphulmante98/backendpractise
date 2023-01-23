const  mongoose = require('mongoose');

const user_Schema = mongoose.Schema({

    username:{
        type:String,
        required:true
    },
   email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const usermodel= mongoose.model('user', user_Schema)
module.exports = usermodel;

