const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  // name: { type: String, required: true },
  // email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
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
   type:String,
   required:true
   // minlength:6
},
confirmpassword:{
   type:String,
   required:true
   // minlength:6
},
tokens:[
   {
       token:{
           type:String,
           required:true,
       }
   }
   
]

});

const userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
