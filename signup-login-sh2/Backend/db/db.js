const mongoose =require('mongoose')


const dbConnect =()=>{
    return mongoose.connect('mongodb://0.0.0.0:27017/spractce')
}


module.exports =dbConnect;