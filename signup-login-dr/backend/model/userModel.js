const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    
    name:{
         type:String,
         required:true
    },
    email:{
        type:String,
         required:true,
         unique:true
    },
    password:{
        type:Number,
        required:true
        // minlength:6
    }
    // confirmpassword:{
    //     type:String,
    //     required:true
    //     // minlength:6
    // },
    // tokens:[
    //     {
    //         token:{
    //             type:String,
    //             required:true,
    //         }
    //     }
        
    // ]
})

const users = new mongoose.model('user', userSchema)
module.exports=users






