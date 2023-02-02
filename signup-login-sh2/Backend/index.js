const express =require('express');
const dbConnect = require('./db/db');
const mongoose=require('mongoose');
const cors =require('cors')
const userRoute = require('./Router/user.router');
mongoose.set('strictQuery', false)
const app =express();


//middlewares
app.use(express.json())
app.use(cors())
app.use('/user',userRoute)

app.get('/',(req,res)=>{
    res.send("hi im backend")
})
app.listen(8000, () => {
    dbConnect()
    console.log('App listening on port http://localhost:8000');
});