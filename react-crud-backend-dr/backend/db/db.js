const mongoose = require("mongoose");
mongoose.set("strictQuery", false)

mongoose.connect('mongodb://0.0.0.0:27017/divya' , 
{useNewUrlParser:true}).then(() => console.log("db connected")).catch((error) => console.log(error));

