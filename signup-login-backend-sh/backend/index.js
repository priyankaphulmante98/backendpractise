const express = require('express');
const connect  = require('./db/db');
const app = express();
const userRoute = require('./Routes/user.route')
const cors=require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/user',userRoute)
app.get('/' , (req, res) => {

    res.send('hello')
})

app.listen(8000, async()=>{
    await connect(

    )
    console.log('server started http://localhost:8000');
})