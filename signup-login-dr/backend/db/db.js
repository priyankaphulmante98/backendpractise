const mongoose =require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://0.0.0.0:27017/signupData', {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(() => 
console.log("db connected")).catch((err) => {
    console.log("err")
})