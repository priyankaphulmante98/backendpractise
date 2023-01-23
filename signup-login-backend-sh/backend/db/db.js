const mongoose =require('mongoose');
mongoose.set('strictQuery',false);
const connect = ()=> {
    return mongoose.connect('mongodb+srv://priyanka:Priya1998@cluster0.aal6n.mongodb.net/jwt')
    
}

module.exports = connect